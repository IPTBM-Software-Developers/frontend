import {Link} from "react-router-dom";

// Icons
// Components
import NavBar from "../../components/landing/NavBar";

// Icons
import { ArrowRight } from "lucide-react";

// Shadcn
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"

const Announcement = ({id}) => {
  return (
    <>
      <main id={id} className="flex flex-col bg-gray-50 min-h-screen w-full justify-center items-center py-8 px-[3%] gap-6">
        <section className="flex items-center justify-center gap-2">
          <div className="p-2 rounded-lg bg-blue-100">
            <Bell className="text-blue-700 "/>
          </div>
          <div className="bg-gray-100 rounded-lg px-2 py-1">
            <p className="text-xs font-medium">
              Latest Update
            </p>
          </div>
        </section>
        {/* Text */}
        <section>
          <h1 className="text-black font-bold text-4xl text-center">
          Announcement
          </h1>
          <p className="text-gray-500 max-w-xl leading-relaxed text-center mt-2">
            Stay informed with the latest news, events, and updates from IPTBM.
          </p>
        </section>

        {/* GRID */}
        <section className="
          grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2
          max-w-lg
          sm:max-w-xl
          md:max-w-3xl
          lg:max-w-7xl
          xl:max-w-[1536px]
          mx-auto py-8">
          {/* CARD 1 */}
          <Card className="flex justify-center items-center w-full rounded-2xl border bg-gray-50 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-700 text-white flex items-center gap-1 px-3 py-1">
                    <Bell className="w-3 h-3" />
                    System Update
                  </Badge>

                  <Badge
                    variant="outline"
                    className="text-blue-700 border-blue-700 bg-blue-50"
                  >
                    New
                  </Badge>
                </div>

                <span className="text-sm text-gray-500">January 25, 2026</span>
              </div>

              <h3 className="text-lg font-semibold">
                New IP Filing System Launch
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We are excited to announce the launch of our new streamlined IP
                filing system, making it easier than ever to register and protect
                your intellectual property.
              </p>

              <Link
                to="/"
                className="flex gap-2 underline text-blue-700 font-semibold"
              >
                read more
                <ArrowRight className="w-5 h-5" />
              </Link>
            </CardContent>
          </Card>

          {/* CARD 2 */}
          <Card className="flex justify-center items-center w-full rounded-2xl border bg-gray-50 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-700 text-white flex items-center gap-1 px-3 py-1">
                    <Bell className="w-3 h-3" />
                    System Update
                  </Badge>

                  <Badge
                    variant="outline"
                    className="text-blue-700 border-blue-700 bg-blue-50"
                  >
                    New
                  </Badge>
                </div>

                <span className="text-sm text-gray-500">January 25, 2026</span>
              </div>

              <h3 className="text-lg font-semibold">
                New IP Filing System Launch
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We are excited to announce the launch of our new streamlined IP
                filing system, making it easier than ever to register and protect
                your intellectual property.
              </p>

              <Link
                to="/"
                className="flex gap-2 underline text-blue-700 font-semibold"
              >
                read more
                <ArrowRight className="w-5 h-5" />
              </Link>
            </CardContent>
          </Card>

          {/* CARD 3 */}
          <Card className="flex justify-center items-center w-full rounded-2xl border bg-gray-50 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-700 text-white flex items-center gap-1 px-3 py-1">
                    <Bell className="w-3 h-3" />
                    System Update
                  </Badge>

                  <Badge
                    variant="outline"
                    className="text-blue-700 border-blue-700 bg-blue-50"
                  >
                    New
                  </Badge>
                </div>

                <span className="text-sm text-gray-500">January 25, 2026</span>
              </div>

              <h3 className="text-lg font-semibold">
                New IP Filing System Launch
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We are excited to announce the launch of our new streamlined IP
                filing system, making it easier than ever to register and protect
                your intellectual property.
              </p>

              <Link
                to="/"
                className="flex gap-2 underline text-blue-700 font-semibold"
              >
                read more
                <ArrowRight className="w-5 h-5" />
              </Link>
            </CardContent>
          </Card>

          {/* CARD 4 */}
          <Card className="flex justify-center items-center w-full rounded-2xl border bg-gray-50 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-700 text-white flex items-center gap-1 px-3 py-1">
                    <Bell className="w-3 h-3" />
                    System Update
                  </Badge>

                  <Badge
                    variant="outline"
                    className="text-blue-700 border-blue-700 bg-blue-50"
                  >
                    New
                  </Badge>
                </div>

                <span className="text-sm text-gray-500">January 25, 2026</span>
              </div>

              <h3 className="text-lg font-semibold">
                New IP Filing System Launch
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We are excited to announce the launch of our new streamlined IP
                filing system, making it easier than ever to register and protect
                your intellectual property.
              </p>

              <Link
                to="/"
                className="flex gap-2 underline text-blue-700 font-semibold"
              >
                read more
                <ArrowRight className="w-5 h-5" />
              </Link>
            </CardContent>
          </Card>

        </section>
        <Link className="w-fit py-2 px-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition cursor-pointer flex items-center justify-center gap-2">
          view all announcement
          <span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </main>

    </>
  )
}

export default Announcement