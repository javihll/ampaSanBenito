import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Target, Users, BookOpen, Handshake, BarChart } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function OrganizacionPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Organización
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
             Un fin básico: la PARTICIPACIÓN de los PADRES Y MADRES en la EDUCACIÓN de sus hijos/as. Existe un ámbito individual y otro colectivo: los padres y madres deciden unirse voluntariamente para la consecución de determinados objetivos. La intervención colectiva es una garantía democrática.
            </p>
          </header>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                <span>Planteamiento de Trabajo</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Para la consecución de ese objetivo fundamental se deben desarrollar una serie de servicios asociados:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p>Ser un punto de referencia claro para todos nuestros socios/as. Para ello se debe facilitar el acceso (correo electrónico, página web, buzón…) y las relaciones (acogida, escucha, buscar un buen contacto…)</p>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p>Asistir a los padres y madres en todo lo concerniente a la educación. Se debe INFORMAR, ASESORAR, APOYAR de forma clara, precisa y con datos o documentos pertinentes en todos los aspectos relativos a la dinámica educativa del centro escolar.</p>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p>ACONSEJAR con sugerencias lo más adecuadas posibles.</p>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p>Debe haber un SEGUIMIENTO, una continuidad en la preocupación por las necesidades.</p>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p>Crear un entorno cómodo y agradable, un ambiente y un espacio que facilite las tareas que se desarrollan.</p>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p>Llevar a cabo actividades extraescolares que busquen el desarrollo global de la personalidad de nuestros hijos/as.</p>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p>Colaborar en la actividad educativa del Centro a través de sus relaciones con la Dirección, el profesorado y el Consejo Escolar.</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BarChart className="h-8 w-8 text-primary" />
                <span>Funciones y Organigrama</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p><strong>Presidencia:</strong> Representa a la Asociación y preside las reuniones de Junta y Asamblea.</p>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p><strong>Vicepresidencia:</strong> Sustituye a la Presidencia.</p>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p><strong>Secretaría:</strong> Custodia los libros oficiales de la Asociación y levanta acta de reuniones y asambleas.</p>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p><strong>Tesorería:</strong> Responsable de las finanzas de la Asociación y elabora el presupuesto anual.</p>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p><strong>Vocalías:</strong> Tienen las responsabilidades que le encomiende la Junta Directiva. Se encargan, por ejemplo, de cuidar alguna de las actividades extraescolares; de organizar actividades culturales; de mantener el contacto con la FAPA Giner de los Ríos…</p>
                </li>
               </ul>
            </CardContent>
          </Card>

          <Alert variant="default" className="border-accent">
            <BookOpen className="h-4 w-4" />
            <AlertTitle className="text-accent font-bold">Estatutos AMPA San Benito</AlertTitle>
            <AlertDescription>
                <Button asChild variant="link" className="p-0 h-auto mt-2">
                    <Link href="https://ampasanbenito.org/wp-content/uploads/2019/04/estatutos-ampa-san-benito.pdf" target="_blank">
                        Consulta aquí los estatutos completos de la asociación.
                    </Link>
                </Button>
            </AlertDescription>
          </Alert>

        </div>
      </div>
    </div>
  );
}