'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from '@tribepad/themis/elements/Button'
import { RadioGroup, Radio } from '@tribepad/themis/elements/RadioGroup'
import type { GateLoaderChevronDetail, GateLoaderElement } from '@/types/gate-loader'
import { loadGateLoader } from './loadGateLoader'

type LoadState = 'loading' | 'ready' | 'error'

interface LogEntry {
  id: number
  message: string
}

const MAX_LOG_ENTRIES = 8
const SIMULATION_TICK_MS = 700

/**
 * The gate is a fixed square, and a grid item will not shrink below its
 * min-content width — so a hard `size` attribute pushes the whole page sideways
 * on a narrow screen. Driving `--size` off the viewport instead keeps it inside
 * the stage's padding. Set as a custom property rather than the attribute,
 * which the component writes to `style` itself and would win.
 */
function gateSize(px: number): React.CSSProperties {
  return { '--size': `min(${px}px, calc(100vw - 5rem))` } as React.CSSProperties
}

/**
 * The gate is amber-on-dark by design, so the stage stays dark in every site
 * theme rather than pretending to be a light-mode component.
 */
function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="grid min-h-[380px] place-items-center rounded-lg border p-6"
      style={{
        borderColor: 'var(--border)',
        background: 'radial-gradient(ellipse at 50% 30%, #0b1220 0%, #05070c 65%)',
      }}
    >
      {children}
    </div>
  )
}

function StageMessage({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-sm text-center text-sm" style={{ color: '#8b93a1' }}>
      {children}
    </p>
  )
}

export function GateLoaderDemo() {
  const [loadState, setLoadState] = useState<LoadState>('loading')

  useEffect(() => {
    let cancelled = false
    loadGateLoader().then(
      () => {
        if (!cancelled) setLoadState('ready')
      },
      () => {
        if (!cancelled) setLoadState('error')
      }
    )
    return () => {
      cancelled = true
    }
  }, [])

  if (loadState === 'error') {
    return (
      <Stage>
        <StageMessage>
          The gate-loader module could not be loaded, so the demo is unavailable. The component
          itself is on GitHub if you would rather see it there.
        </StageMessage>
      </Stage>
    )
  }

  return (
    <div className="grid gap-12">
      <LoopDemo ready={loadState === 'ready'} />
      <ManualDemo ready={loadState === 'ready'} />
    </div>
  )
}

/* ── Loop mode ────────────────────────────────────────────── */

function LoopDemo({ ready }: { ready: boolean }) {
  // Unmounting is the stop button: the element cancels its own sequence in
  // disconnectedCallback, and there is no pause in the public API.
  const [dialling, setDialling] = useState(true)

  return (
    <section aria-labelledby="demo-loop-heading">
      <h3
        id="demo-loop-heading"
        className="mb-2 text-xl font-semibold"
        style={{ color: 'var(--content-foreground)' }}
      >
        Loop mode
      </h3>
      <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
        The default. An indeterminate loader for when you have no idea how long something will take:
        the gate dials Earth&rsquo;s address, holds the wormhole open, shuts down and starts again.
        The status line is switched off here with <code>no-status</code> — a sequence that never
        finishes would announce itself forever.
      </p>
      <Stage>
        {!ready ? (
          <StageMessage>Loading the gate&hellip;</StageMessage>
        ) : dialling ? (
          <gate-loader style={gateSize(320)} no-status="" />
        ) : (
          <StageMessage>The gate is shut down.</StageMessage>
        )}
      </Stage>
      <div className="mt-4">
        <Button variant="outline" onPress={() => setDialling(prev => !prev)} isDisabled={!ready}>
          {dialling ? 'Shut down the gate' : 'Start dialling'}
        </Button>
      </div>
    </section>
  )
}

/* ── Manual mode ──────────────────────────────────────────── */

function ManualDemo({ ready }: { ready: boolean }) {
  const gateRef = useRef<GateLoaderElement | null>(null)
  const simulationRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const logIdRef = useRef(0)

  const [canon, setCanon] = useState<'series' | 'movie'>('series')
  const [log, setLog] = useState<LogEntry[]>([])
  const [simulating, setSimulating] = useState(false)

  const append = useCallback((message: string) => {
    logIdRef.current += 1
    const entry = { id: logIdRef.current, message }
    setLog(prev => [entry, ...prev].slice(0, MAX_LOG_ENTRIES))
  }, [])

  const stopSimulation = useCallback(() => {
    if (simulationRef.current !== null) {
      clearInterval(simulationRef.current)
      simulationRef.current = null
    }
    setSimulating(false)
  }, [])

  useEffect(() => stopSimulation, [stopSimulation])

  // Listeners live on the element, so they can only be attached once it exists.
  useEffect(() => {
    const gate = gateRef.current
    if (!ready || !gate) return

    const onChevron = (event: Event) => {
      const { chevron, glyph, locked } = (event as CustomEvent<GateLoaderChevronDetail>).detail
      append(`chevron ${chevron} ${locked ? 'locked' : 'encoded'} — glyph ${glyph}`)
    }
    const onWormhole = () => {
      append('wormhole established')
      stopSimulation()
    }
    const onReset = () => append('reset — standby')

    gate.addEventListener('chevron', onChevron)
    gate.addEventListener('wormhole', onWormhole)
    gate.addEventListener('reset', onReset)
    return () => {
      gate.removeEventListener('chevron', onChevron)
      gate.removeEventListener('wormhole', onWormhole)
      gate.removeEventListener('reset', onReset)
    }
  }, [ready, append, stopSimulation])

  const handleReset = useCallback(() => {
    stopSimulation()
    gateRef.current?.reset()
    setLog([])
  }, [stopSimulation])

  const handleSimulate = useCallback(() => {
    const gate = gateRef.current
    if (!gate) return

    stopSimulation()
    gate.reset()
    setLog([])
    setSimulating(true)

    let progress = 0
    simulationRef.current = setInterval(() => {
      progress += Math.random() * 0.25
      // Jumps are fine — the component queues the chevrons in between.
      gate.progress = Math.min(1, progress)
      if (progress >= 1) stopSimulation()
    }, SIMULATION_TICK_MS)
  }, [stopSimulation])

  const controlsDisabled = !ready || simulating

  return (
    <section aria-labelledby="demo-manual-heading">
      <h3
        id="demo-manual-heading"
        className="mb-2 text-xl font-semibold"
        style={{ color: 'var(--content-foreground)' }}
      >
        Manual mode
      </h3>
      <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
        Determinate. The gate stops dialling on its own and waits for you — step it one chevron at a
        time, or hand it a 0–1 figure from real work and let it catch up. This one keeps its status
        line, so every engagement is announced as well as shown.
      </p>
      <Stage>
        {ready ? (
          <gate-loader ref={gateRef} mode="manual" canon={canon} style={gateSize(300)} />
        ) : (
          <StageMessage>Loading the gate&hellip;</StageMessage>
        )}
      </Stage>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          variant="default"
          onPress={() => gateRef.current?.engageNext()}
          isDisabled={controlsDisabled}
        >
          Engage next chevron
        </Button>
        <Button variant="outline" onPress={handleSimulate} isDisabled={!ready}>
          {simulating ? 'Simulating…' : 'Simulate a load'}
        </Button>
        <Button
          variant="outline"
          onPress={() => gateRef.current?.complete()}
          isDisabled={controlsDisabled}
        >
          Complete
        </Button>
        <Button variant="ghost" onPress={handleReset} isDisabled={!ready}>
          Reset
        </Button>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <RadioGroup
          label="Canon"
          description="Which chevron does the clunking?"
          orientation="horizontal"
          value={canon}
          onChange={value => setCanon(value === 'movie' ? 'movie' : 'series')}
          isDisabled={!ready}
        >
          <Radio value="series">Series</Radio>
          <Radio value="movie">Movie</Radio>
        </RadioGroup>

        <div>
          <h4
            id="demo-event-log-heading"
            className="mb-2 text-sm font-semibold"
            style={{ color: 'var(--content-foreground)' }}
          >
            Events
          </h4>
          {log.length === 0 ? (
            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
              Nothing dispatched yet.
            </p>
          ) : (
            <ul
              aria-labelledby="demo-event-log-heading"
              className="grid gap-1 font-mono text-xs"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {log.map(entry => (
                <li key={entry.id}>{entry.message}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
