import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, FileText, Calendar, Users, Info } from "lucide-react";

export default function ExtraescolaresPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Actividades Extraescolares 2024-2025
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Toda la información sobre la oferta de actividades para el nuevo curso.
            </p>
          </header>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <Info className="h-8 w-8 text-primary" />
                    <span>Información General</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Buenos días familias, os adjuntamos un pdf donde podéis encontrar toda la información para las actividades extraescolares para este curso 2024-2025. Darán comienzo el día <strong>martes 1 de octubre</strong> y se desarrollarán hasta el día <strong>viernes 30 de mayo</strong>, en horario de 16:00 a 17:00.
              </p>
              <p className="text-muted-foreground">
                El plazo de inscripción para las actividades abarca desde el <strong>viernes 13 de septiembre hasta el domingo 22 de septiembre</strong>, ambos inclusive.
              </p>
               <p className="text-muted-foreground">
                Para cualquier duda que pueda surgir con la información adjunta, podéis contactar en el siguiente email: <a href="mailto:actividades@ampasanbenito.org" className="text-primary hover:underline">actividades@ampasanbenito.org</a>
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-primary" />
                    <span>Inscripción y Cuotas</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                Para apuntarse a las actividades extraescolares podéis haceros socios/as del AMPA <Link href="/hazte-socio" className="text-primary hover:underline">aquí</Link> con una sola cuota anual de 30 € por familia (15 € para familias con un miembro en paro, familias numerosas, y familias monoparentales y gratuito para familias con dos de sus miembros en paro).
                </p>
                 <p className="text-muted-foreground">
                 También podéis inscribiros a las actividades sin haceros socios/as, lo que implica una matrícula de 50 € por niño/a (independientemente del número de actividades).
                </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-lg">
             <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <span>Ficha de Inscripción y Cuadro de Actividades</span>
                </CardTitle>
                <CardDescription>
                    Pinchando en el siguiente botón podéis descargar el PDF con toda la información.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
                <Button asChild>
                    <Link href="https://drive.google.com/file/d/1LLWHtzxj4R6yZkUH1FNvVe5yXnLLhfQs/view" target="_blank">
                        <Download className="mr-2 h-4 w-4"/>
                        Descargar PDF de Información
                    </Link>
                </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg border-accent">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-accent">
                    <Users className="h-8 w-8" />
                    <span>¡Colabora con nosotros!</span>
                </CardTitle>
            </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">
                    Un abrazo fuerte y os invitamos a participar y colaborar en la AFA, y en particular en el grupo de extraescolares para poder seguir ofreciendo este tipo de actividades en el futuro…
                </p>
             </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
