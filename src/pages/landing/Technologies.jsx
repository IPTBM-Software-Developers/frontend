import {Link} from "react-router-dom";

// Icons
import { Layers } from "lucide-react";
import { Clock } from "lucide-react";
import { Shield } from "lucide-react";
import { Cpu } from "lucide-react";
import { Cloud } from "lucide-react";
import { Database } from "lucide-react";
import { Zap } from "lucide-react";
import { Globe } from "lucide-react";

// Components
import NavBar from "../../components/landing/NavBar";

// Icons
import { ArrowRight } from "lucide-react";

// Shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"

const Technologies = () => {
  const cards = [
    {
      icon: <Shield className="w-8 h-8 text-blue-700"/>,
      title: "Blockchain Security",
      desc: "Immutable records and tamper-proof documentation for your intellectual property assets using distributed ledger technology.",
      badges: ["Timestamped Records", "Tamper-Proof", "Decentralized"],
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-700"/>,
      title: "AI-Powered Analysis",
      desc: "Advanced machine learning algorithms to analyze, categorize, and monitor your IP portfolio for potential infringements.",
      badges: ["Smart Detection", "Auto-Classification", "Risk Analysis"],
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-700"/>,
      title: "Cloud Infrastructure",
      desc: "Secure, scalable cloud-based platform ensuring your data is accessible anywhere while maintaining enterprise-grade security.",
      badges: ["99.9% Uptime", "Global Access", "Auto-Scaling"],
    },
    {
      icon: <Database className="w-8 h-8 text-blue-700"/>,
      title: "Secure Data Storage",
      desc: "End-to-end encrypted storage solutions with redundant backups and compliance with international data protection standards.",
      badges: ["AES-256 Encryption", "GDPR Compliant", "Auto-Backup"],
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-700"/>,
      title: "Real-Time Monitoring",
      desc: "Continuous monitoring of your IP assets with instant alerts for potential violations or unauthorized usage worldwide.",
      badges: ["24/7 Scanning", "Instant Alerts", "Global Coverage"],
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-700"/>,
      title: "API Integration",
      desc: "Seamless integration with existing systems through our robust API, enabling automated workflows and data synchronization.",
      badges: ["RESTful API", "Webhooks", "SDK Available"],
    },
  ];

  return (
    <>
      <NavBar />
      <main className="flex flex-col bg-gray-50 min-h-screen w-full justify-center items-center px-40 py-8 gap-6">

        {/* Text */}
        <section className="flex flex-col gap-4 items-center justify-center">
            <div className="p-2 rounded-lg bg-blue-100">
              <Layers className="text-blue-700" />
            </div>

            <div className="bg-gray-100 rounded-lg px-2 py-1">
              <p className="text-xs font-medium">
                Latest Update
              </p>
            </div>

            <h1 className="text-black font-bold text-4xl text-center">
              Technologies We Use
            </h1>

            <p className="text-gray-500 max-w-xl leading-relaxed text-center">
              Our platform leverages the latest technologies to provide secure, efficient, and innovative IP management solutions.
            </p>
        </section>

        {/* Cards  */}
          <section className="w-full max-w-8xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {cards.map((card, i) => (
              <Card key={i} className="w-full rounded-2xl border bg-gray-50 shadow-sm">
                <CardContent className="p-6 flex flex-col gap-4">

                  {/* icon stays same */}
                  <div className="inline-flex w-fit p-4 rounded-lg bg-blue-100">
                    {card.icon}
                  </div>

                  {/* text */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed break-words">
                      {card.desc}
                    </p>
                  </div>

                  {/* badges */}
                  <div className="flex flex-wrap gap-2">
                    {card.badges.map((badge, b) => (
                      <Badge
                        key={b}
                        className="bg-blue-50 text-gray-600 flex items-center gap-1 px-3 py-1"
                      >
                        <Clock className="w-3 h-3 text-blue-700" />
                        {badge}
                      </Badge>
                    ))}
                  </div>

                </CardContent>
              </Card>
            ))}
          </section>

          {/* Button */}
          <button className="group px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-sm hover:bg-blue-700 transition cursor-pointer active:scale-95 active:shadow-sm transition-transform duration-100 flex items-center gap-2">
            Explore Our Platform
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
      </main>
    </>
  )
}

export default Technologies