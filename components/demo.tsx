"use client"

import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { ShaderPlane, EnergyRing } from "@/components/ui/background-paper-shaders"

export default function DemoOne() {
    const [color1, setColor1] = useState("#3abeff")
    const [color2, setColor2] = useState("#0a0e1a")
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText("pnpm i 21st")
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy text: ", err)
        }
    }

    return (
        <div className="w-full h-screen bg-black relative overflow-hidden">
            <div className="w-full h-full absolute inset-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ShaderPlane position={[0, 0, 0]} color1={color1} color2={color2} />
                    <EnergyRing radius={1.2} position={[0, 0, -0.5]} />
                    <EnergyRing radius={2.0} position={[0, 0, -1.5]} />
                </Canvas>
            </div>

            {/* UI Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Header */}
                <div className="absolute top-8 left-8 pointer-events-auto">
                    <h1 className="text-white text-2xl font-bold">Paper Shaders</h1>
                </div>

                {/* Effect Controls */}
                <div className="absolute bottom-8 left-8 pointer-events-auto space-x-4 flex">
                    <button
                        onClick={() => setColor1("#ff5722")}
                        className="px-4 py-2 bg-orange-500 text-white rounded-md text-sm"
                    >
                        Sunset
                    </button>
                    <button
                        onClick={() => setColor1("#3abeff")}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm"
                    >
                        Ocean
                    </button>
                </div>

                {/* Parameter Controls */}
                <div className="absolute bottom-8 right-8 pointer-events-auto space-y-4"></div>

                {/* Status indicator */}
                <div className="absolute top-8 right-8 pointer-events-auto"></div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center font-mono text-xs text-white/40">
                    <div>...21st-cli...</div>
                    <div className="mt-1 flex items-center gap-2">
                        <span>pnpm i 21st.dev</span>
                        <button
                            onClick={copyToClipboard}
                            className="pointer-events-auto opacity-30 hover:opacity-60 transition-opacity text-white/60 hover:text-white/80"
                            title="Copy to clipboard"
                        >
                            {copied ? (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                </svg>
                            ) : (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
