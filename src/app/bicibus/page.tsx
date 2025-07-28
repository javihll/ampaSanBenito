import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bike, FileText, Info } from "lucide-react";
import Image from "next/image";

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

          <div className="my-8 flex justify-center">
            <Image
              src="/images/pages/bicibus2.webp"
              alt="Niños y padres en el bicibús"
              data-ai-hint="children cycling"
              width={900}
              height={506}
              className="w-1/2 h-auto rounded-lg shadow-lg"
            />
          </div>

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
                    <FileText className="h-8 w-8 text-primary" />
                    <span>¡Súbete con tus hij@s al bici-bus del San Benito!</span>
                </CardTitle>
                <CardDescription>
                    Publicado el 14 de diciembre de 2017 por Elena
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>En aras de mejorar la movilidad en el entorno del colegio, fomentar el uso de la bicicleta con trayectos seguros y en grupo como alternativa al coche y hacer un poco de ejercicio físico de forma divertida, os proponemos subir al bici-bus del San Benito.</p>
              
              <h3 className="font-headline text-lg font-semibold text-foreground">Pero, ¿qué es eso de un bici-bus escolar?</h3>
              <p>Un bici-bus escolar no es más que un grupo de ciclistas formado por alumnos y alumnas acompañados de adultos (madres, padres, abuelos/as, tutoras/es), que realiza un itinerario conocido, efectuando paradas en diferentes puntos con objeto de que se incorporen alumnos que allí viven. El recorrido siempre termina en el colegio (antes de que suene el timbre de entrada, en nuestro caso las 9:00).</p>
              <p>Los itinerarios y los horarios dependen del lugar de residencia de las familias, y este, junto al compromiso de aquellas, determinará también el número de rutas y grupos diferentes.</p>
              <p>Cada bici-bus, es decir, cada pelotón, deberá contar con varios adultos que supervisen y “protejan” a los niños en el recorrido, y estos deberán ir acompañados por un familiar (padre, madre, tutor/a…). En una segunda fase del bici-bus, cuando este ya esté implantado, plantearemos la opción de que se sumen niños sin sus padres, siempre que aquellos tengan más de ocho años.</p>
              <p>El bici-bus es una actividad bastante común en algunas ciudades europeas, y en Madrid, actualmente, la desarrollan colegios como el CEIP Andrés Segovia, CEIP Trabenco, CEIP Pardo Bazán, CEIP Pérez Galdós, CEIP Julio Cortázar, CEIP Vázquez Montalbán y CEIP Monserrat.</p>
              <p>Se trata de una iniciativa privada, de los padres y madres, en nuestro caso de la AMPA, ajena al Colegio. Por esto mismo el Colegio carece totalmente de responsabilidad, aunque la apoye y facilite cosas como el aparcamiento de las bicis en el interior del centro. El hecho de que cada viernes anime a las familias a acudir al centro en bicicleta muestra la importancia que el colegio da a este medio de transporte.</p>

              <h3 className="font-headline text-lg font-semibold text-foreground">¿Cómo lo ponemos en marcha?</h3>
              <p>Para formar un bici-bus es necesario la implicación de algunos padres y madres y, por supuesto, y en primer lugar, ganas de pedalear en grupo y de manera segura. Desde la AMPA animamos a las familias a que se sumen a esta forma divertida, saludable y ecológica de venir al cole.</p>
              <p>Nuestra idea inicial es organizar el bici-bus el último viernes de cada mes, pero antes necesitamos saber qué familias están interesadas en participar así como su lugar de residencia. Si deseas participar, te rogamos rellenes el siguiente formulario <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeS45AczFpWOHB-If8L64ui2Er4GGbaJ7ulVIA1KtakH_7j3g/viewform" target="_blank" className="text-primary hover:underline">https://docs.google.com/forms/d/e/1FAIpQLSeS45AczFpWOHB-If8L64ui2Er4GGbaJ7ulVIA1KtakH_7j3g/viewform</Link> antes del 10 de ENERO de 2018.</p>
              <p>Posteriormente, la Comisión de Movilidad de la AMPA estudiará los datos recogidos en los formularios para organizar las rutas más adecuadas, así como los horarios, algo que se podrá ampliar y modificar después con la llegada de nuevas familias. Nos gustaría comenzar a rodar el último viernes de enero. Entonces haremos públicas las rutas y paradas. Cada ruta tendrá un grupo de Whatsapp para coordinarse y resolver posibles incidencias.</p>
              <p>Una vez que estés incorporado a una ruta, deberás acompañar a tu hijo/a a la parada del bici-bus en el horario indicado. Cada niño/a y cada adulto/a deberá llevar su bici, casco y un chaleco reflectante. La AMPA tratará de conseguir los chalecos para los niños y niñas.</p>
              <p>Si deseas tener más detalles del bici-bus y de los beneficios que reporta a los alumnos y alumnas, al colegio, y a la ciudad puedes ver la siguiente página del proyecto Starts Madrid: <Link href="https://eustarsmadrid.blogspot.com.es/2015/04/que-es-un-bicibus.html" target="_blank" className="text-primary hover:underline">https://eustarsmadrid.blogspot.com.es/2015/04/que-es-un-bicibus.html</Link></p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
