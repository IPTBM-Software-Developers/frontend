import {Link} from "react-router-dom";
import { useState, useEffect } from "react";

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
import AnimatedContent from "@/components/landing/AnimatedContent";

// Icons
import { ArrowRight } from "lucide-react";

// Shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"

const Technologies = ({id}) => {
  const [pageVisit, setPageVisit] = useState(0);

  useEffect(() => {
    setPageVisit(v => v + 1);
  }, []); // increment on mount

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
      <main id={id} className="flex flex-col bg-gray-50 min-h-screen w-full justify-center items-center py-16 px-[5%] gap-6 scroll-mt-20">
        <AnimatedContent
          key={pageVisit}          // 🔑 forces remount
          distance={300}
          direction="vertical"
          reverse={false}
          duration={3}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
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
          <section className="
          grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3
          max-w-lg
          sm:max-w-xl
          md:max-w-3xl
          lg:max-w-7xl
          xl:max-w-[1536px]
          mx-auto py-8">

            {cards.map((card, i) => (
              <Card key={i} className="w-full rounded-2xl border  bg-white shadow-sm">
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
        </AnimatedContent>

        
      </main>
    </>
  )
}

export default Technologies