import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bike, FileText, Info } from "lucide-react";

export default function BicibusPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              ¡Ven al Cole en Bici!
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
             Desde el grupo de Movilidad del AMPA queremos reactivar el BICIBUS.
            </p>
          </header>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <Bike className="h-8 w-8 text-primary" />
                    <span>¡Nos vamos en Bicibús!</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>Buenos días familias,</p>
                <p>Desde el grupo de Movilidad del AMPA queremos reactivar el BICIBUS y ¡llegar pedaleando al cole este mismo viernes 11 de octubre!</p>
                <p>Así que si estáis interesados en participar uníos al grupo de whatsapp donde estaremos coordinando las diferentes paradas: <Link href="https://chat.whatsapp.com/EpiseuksJShAWoFMr4snDP" target="_blank" className="text-primary hover:underline">https://chat.whatsapp.com/EpiseuksJShAWoFMr4snDP</Link></p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <Info className="h-8 w-8 text-primary" />
                    <span>Ayúdanos a Mejorar</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>Además, para animar a todos aquellos indecisos y cubrir las necesidades de los que aún no se sienten incluidos (por ser muy peques, no tener ruta, o cualquier otro motivo,…) hemos creado un cuestionario que nos ayudará a mejorar este maravilloso proyecto.</p>
                <p>Tanto si ya has participado en años anteriores como si estás pensando en unirte, nos gustaría que contestaras a estas sencillas preguntas: <Link href="https://docs.google.com/forms/d/e/1FAIpQLSftdzfH1WRzlHYOyQz_pK9Kk3THAD8ZznlE_tJC-WlQgWIlsA/viewform" target="_blank" className="text-primary hover:underline">https://docs.google.com/forms/d/e/1FAIpQLSftdzfH1WRzlHYOyQz_pK9Kk3THAD8ZznlE_tJC-WlQgWIlsA/viewform</Link></p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-lg">
             <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <span>Más Información y Motivación</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <p className="text-muted-foreground">
                    Para más información: <Link href="https://ampasanbenito.org/2017/12/14/subete-con-tus-hijs-al-bici-bus-del-san-benito/" target="_blank" className="text-primary hover:underline">Bicibús del San Benito</Link>
                </p>
                <p className="text-muted-foreground">
                    Y para más motivación: <Link href="https://www.youtube.com/watch?v=YQc15uOfqdM" target="_blank" className="text-primary hover:underline">Vídeo del Bicibús</Link>
                </p>
                <p className="font-semibold">¡¡No olvidéis el casco, el chaleco este viernes!!</p>
                <p className="font-bold text-lg text-primary">¡OS ESPERAMOS A TODOS!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
