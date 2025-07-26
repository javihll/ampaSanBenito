import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, HelpCircle, Settings, Heart, Mail, CheckCircle, ListChecks } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function QuienesSomosPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Quiénes Somos
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              El AMPA (Asociación de madres y padres del «cole») somos la mayoría de madres y padres del centro. Todo el que paga la cuota de socio/a es miembro del AMPA.
            </p>
            <p className="mt-2 text-muted-foreground">
              La Junta Directiva del AMPA, o sea, las madres y padres que hablan con vosotros/as por algún tema de las extraescolares, o ponen los carteles informativos en el tablón, o hacen mudanza para rehabilitar un aula de extraescolares, o están en contacto directo con el «cole», somos mamás y papás voluntarios.
            </p>
          </header>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <HelpCircle className="h-8 w-8 text-primary" />
                <span>¿Qué Hacemos?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p>Gestionamos las <strong>actividades extraescolares</strong> de manera gratuita, de forma que se abaratan las actividades. Esto hace posible el acceso a ellas de un mayor número de niños/as.</p>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p>Intentamos solucionar problemas que puedan afectar a un colectivo de madres y padres. Por ejemplo: ¿Con quién dejamos a los niños/as si entramos a trabajar a las 8? Con sus compañeros/as en <strong>«Los Primeros del Cole»</strong>. ¿Y si en verano sigo saliendo a las 3 del trabajo? Pues organizamos la <strong>«Prolongación de jornada»</strong>. ¿Cómo nos podemos enterar de qué pasa con las leyes de educación? En una <strong>Asamblea extraordinaria</strong>.</p>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p>Defendemos e intentamos, con todos los medios a nuestro alcance, mejorar la <strong>enseñanza pública</strong> porque creemos en ella. Lo público es de todos y todas.</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Settings className="h-8 w-8 text-primary" />
                <span>¿Cómo Funcionamos?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p>Nos repartimos el trabajo a través de <strong>comisiones</strong>: cada padre o madre de la Junta Directiva asume llevar un tema.</p>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p>Trabajamos a través de grupos de <strong>Whatsapp</strong> y nos reunimos al menos dos veces al año, todas las decisiones se toman democráticamente.</p>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                    <p>Hacemos al menos una <strong>asamblea ordinaria</strong> al año, y las que hagan falta extraordinarias, para informar a todos los padres y madres y que todos puedan decidir.</p>
                </li>
               </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                <span>¿Por qué colaborar?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                        <p>Para dar <strong>ejemplo a sus hijos/as</strong> de solidaridad y enseñarles los beneficios del trabajo en equipo.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                        <p>Para que sus hijos/as sientan el cole en casa y su <strong>casa en el cole</strong>, mientras ven cómo se preocupan sus papás y mamás de sus pequeños grandes problemas.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                        <p>Porque este es el mecanismo para poder <strong>decidir en muchos aspectos</strong> sobre la educación de los hijos/as en el colegio.</p>
                    </li>
                </ul>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-8 w-8 text-primary" />
                <span>¿Cómo Contactar?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">A través del correo electrónico:</p>
              <a href="mailto:sanbenito@ampasanbenito.org" className="text-primary text-lg font-semibold hover:underline">
                sanbenito@ampasanbenito.org
              </a>
            </CardContent>
          </Card>

          <Alert variant="default" className="border-accent">
            <Users className="h-4 w-4" />
            <AlertTitle className="text-accent font-bold">¡Contamos contigo!</AlertTitle>
            <AlertDescription>
              <p className="mt-2">Te invitamos a que te <strong>acerques a las asambleas del AMPA.</strong> Por el bien de tus hijos/as, mantente informado.</p>
              <p className="mt-4 font-semibold text-foreground">NOS GUSTARÍA QUE TRABAJARAS CON NOSOTROS/AS POR LO QUE CREEMOS</p>
              <p className="mt-1 font-bold text-lg text-primary">TE NECESITAMOS Y TE GUSTARÁ</p>
            </AlertDescription>
          </Alert>

        </div>
      </div>
    </div>
  );
}
