import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Download, FileText } from "lucide-react";

export default function ExtraescolaresPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Actividades Extraescolares
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Información sobre la oferta de actividades extraescolares para el curso 2023-2024.
            </p>
          </header>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle>Oferta de Actividades</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Os informamos de que el plazo de inscripción para las actividades extraescolares del presente curso 2023-2024 se ha iniciado. La inscripción se llevará a cabo a través de la plataforma Educamos.
              </p>
              <p className="text-muted-foreground">
                Las actividades extraescolares comenzarán el <strong>lunes 2 de octubre de 2023</strong> y finalizarán el <strong>viernes 31 de mayo de 2024</strong>, respetando en todo momento el calendario escolar (sin actividad en vacaciones y días no lectivos).
              </p>
              <p className="text-muted-foreground">
                La empresa encargada de gestionar las actividades es Activa. La atención a las familias se realizará a través de los siguientes canales:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Teléfono: <strong>609 570 318</strong></li>
                <li>Email: <a href="mailto:sanbenito@grupoactiva.es" className="text-primary hover:underline">sanbenito@grupoactiva.es</a></li>
              </ul>
              <p className="text-muted-foreground">
                El horario de atención es de lunes a viernes de 9:00 a 14:00 y de 16:00 a 18:00.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-lg">
             <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <span>Cuadro de Actividades y Ficha de Inscripción</span>
                </CardTitle>
                <CardDescription>
                    Pinchando en el siguiente botón podéis descargar el PDF con el cuadro de actividades extraescolares para el curso 2023-2024 y la ficha de inscripción.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
                <Button asChild>
                    <Link href="https://drive.google.com/file/d/1LLWHtzxj4R6yZkUH1FNvVe5yXnLLhfQs/view" target="_blank">
                        <Download className="mr-2 h-4 w-4"/>
                        Descargar PDF
                    </Link>
                </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
