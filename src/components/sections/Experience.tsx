import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function Experience() {
  return (
    <section id="experience" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <Skeleton className="h-8 w-64 mx-auto mb-4" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Experience Section */}
        <div>
          <Skeleton className="h-6 w-32 mb-6" />
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <CardTitle>
                    <Skeleton className="h-6 w-48 mb-2" />
                  </CardTitle>
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-36" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <Skeleton className="h-6 w-24 mb-6" />
          <div className="space-y-8">
            {/* Technical Skills */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-6 w-40" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Skeleton className="h-4 w-4 rounded-full" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-6 w-28" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {[1, 2, 3, 4, 5].map((skill) => (
                    <div key={skill} className="space-y-1">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-2 w-full rounded-full" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}