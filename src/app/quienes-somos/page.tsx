import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Users, HelpCircle, Settings, Heart, Mail, CheckCircle, ListChecks, Target, BookOpen, Handshake, BarChart, Sprout, Milestone, Drama, Palmtree, Gamepad2, ShieldCheck, Paintbrush, Network, Thermometer, UserCog, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const workGroups = [
  {
    icon: Users,
    title: "Equipo directivo",
    content: "Presidenta: Claudia; Vice: Zahara; Secretaría: Elena; Tesorera: Isabel; Consejera Ampa: Lucía",
  },
  {
    icon: Sprout,
    title: "Grupo de extraescolares",
    content: "Quizá uno de los grupos más importantes al dar servicio a las familias para la conciliación familiar a través de la prolongación de jornada en junio/sep, las extraescolares, los primeros del cole, campamento de verano, guardería durante los talleres. Responsable del grupo: Irene y Lucía",
  },
  {
    icon: Heart,
    title: "Grupo de comedor",
    content: "La AMPA revisa los menús, presenta propuestas, organiza reuniones con la empresa adjudicataria del comedor y con la dirección del cole, organiza talleres. Responsable del grupo: Laura",
  },
  {
    icon: Palmtree,
    title: "Grupo del huerto",
    content: (
        <div className="space-y-4">
            <p>
                La Ampa financia parte de las actividades que se desarrollan en el huerto, se organizan talleres con las familias, se realizan visitas a otros huertos y todas las clases pasan por el huerto periódicamente. Queremos que el Huerto del San Benito sea un espacio abierto para todas las familias.
            </p>
            <p>
                Un espacio en el que se fomenta no solo la educación medioambiental, sino también los valores como el trabajo en equipo, la constancia, el esfuerzo y la creatividad. ¡Qué más podemos pedir!.
            </p>
            <p>
                Por ello, un viernes al mes dedicamos un ratito a este espacio del colegio tan especial para todos los niños y niñas. Para acondicionarlo, cuidarlo y entre todas y todos ¡dejar el huerto aún más bonito!.
            </p>
            <p>
                ¡Anímate a participar en familia y ven a disfrutar de un viernes hortelano juntos!.
            </p>
            <p>
                Responsable del grupo: Saray
            </p>
             <Button asChild variant="link" className="p-0 h-auto">
                <Link href="/huerto" className="font-semibold">
                    Picha aquí para más info de nuestro querido huerto.
                </Link>
            </Button>
        </div>
    )
  },
  {
    icon: Drama,
    title: "Grupo de cultura e igualdad",
    content: "Se crean actividades que son esperadas por todos/as con mucha ilusión y cariño, como: el día de los abuelos/as, la Cabalgata de Reyes; talleres de temáticas diversas, actividades por el 8m, la Semana Cultural, chocolatadas, fiesta de fin de curso. Responsable del grupo: Laura",
  },
  {
    icon: Milestone,
    title: "Grupo de movilidad",
    content: (
        <div className="space-y-2">
            <p>Se ha conseguido la peatonalización de la calle Mariano Díaz, los pasos de peatones en las dos entradas de infantil, los aparcabicis. Somos miembros de la revuelta escolar. Pero la actividad estrella es, sin duda, el Bicibús de los viernes.</p>
            <Button asChild variant="link" className="p-0 h-auto">
                <Link href="/bicibus" className="font-semibold">
                    Más información del Bicibús aquí.
                </Link>
            </Button>
            <p>Responsable del grupo: Rubén y Bubi.</p>
        </div>
    )
  },
  {
    icon: Gamepad2,
    title: "Familias jugonas",
    content: (
        <div className="space-y-4">
            <p>
                Para todas las familias con niñas y niños de cualquier edad, que tengan ganas de divertirse y participar en Juegos de Mesa. Nuestro objetivo es reunirnos un viernes al mes por la tarde: niñas, niños, madres, padres, abuelos, y así jugar todos juntos, compartir y fomentar estos juegos como una alternativa de ocio en familia.
            </p>
            <p>
                Se pueden llevar juegos que cada uno tengamos en nuestra casa. Los compartiremos y cuidaremos entre todos el tiempo que estemos allí y después cada uno se los volverá a llevar a casa.
            </p>
            <div>
                <h4 className="font-semibold">CUÁNDO</h4>
                <p>
                    La actividad se realiza un viernes al mes a las 16:00 o a las 17:00 en el comedor del colegio. Y se puede llevar la merienda para tomarla allí.
                </p>
            </div>
            <p className="font-semibold">¡Apuntaros a la diversión!</p>
            <p>
                Sólo tenéis que rellenar este <Link href="https://docs.google.com/forms/d/e/1FAIpQLScb7jnHKahKWlt5mtHuX3lYdKrYC67tIILqE2Nr05MTXxBjmQ/viewform" target="_blank" className="text-primary hover:underline">formulario (click aquí)</Link> para que tengamos vuestros datos y os podamos incluir en el grupo de WhatsApp de organización de las quedadas.
            </p>
             <p>
                Si os animáis, y puesto que esto va de juegos… os enlazamos también las instrucciones para las quedadas: <Link href="https://gallery.mailchimp.com/4b64ed96651ad4be17f76ef76/files/b17be716-89d4-438b-8ae5-8ead7ffc6272/Libro_de_Instrucciones_Club_Familias_Jugonas.pdf" target="_blank" className="text-primary hover:underline">descargar instrucciones</Link>.
            </p>
            <p>Responsable del grupo: Begoña</p>
        </div>
    )
  },
  {
    icon: ShieldCheck,
    title: "Grupo de convivencia",
    content: "Una de las grandes preocupaciones de la Ampa es el acoso escolar en las aulas, en 2024 surgió esta comisión para gestionar el proyecto presentado a la Junta de distrito tras la concesión de la subvención del asociacionismo: “Todas y todos contra el acoso escolar”. Responsable del grupo: Elena",
  },
  {
    icon: Paintbrush,
    title: "Grupo de patios inclusivos",
    content: "A lo largo de estos años se han conseguido un montón de cosas: nuevo mobiliario, pintura de los muros interiores, mejoras contra el calor con la instalación de toldos y persianas y, sobre todo, renovar el muro exterior del cole. Responsable del grupo: Cristina C. y Claudia",
  },
  {
    icon: Network,
    title: "Grupo de comunicación",
    content: "Son las encargadas de enviar todas las comunicaciones a las familias a través de los grupos de whatsapp de los papás y mamás, así se asegura que todas las familias estén al tanto de las noticias. También se gestionan las redes sociales y la comunicación con el resto de las Ampas. Responsable comunicaciones: Laura S; redes sociales: Elena; relación con el resto de Ampas: Claudia",
  },
  {
    icon: UserCog,
    title: "Transformación digital",
    content: "Creado para dar soporte a la asociación y familias en cuestiones tecnológicas y, en la medida de lo posible, al propio colegio. También se ocupa de la web de la Ampa. Responsable del grupo: Irene",
  },
  {
    icon: Thermometer,
    title: "Climatización",
    content: "Creada en 2024, tras la recogida masiva de firmas realizada por la Fapa para conseguir la climatización en todos los coles públicos de la Comunidad de Madrid. Responsable del grupo: Claudia",
  },
];

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
                <Info className="h-6 w-6 text-primary" />
                <span>¿Qué es el AMPA?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>Hola familias,</p>
                <p>Ya estamos otro año en fechas de las Jornadas de puertas abiertas en el colegio.</p>
                <p>Para todas aquellas familias que sereis nuevas o las que ya estais, pero no conoceis todo lo que se hace dentro del AMPA, os traemos esta información para que podais conocer más de este grupo de padres y madres que trabajan duro para mejorar y dinamizar nuestro colegio.</p>
                <div className="my-4">
                    <iframe src="https://ampasanbenito.org/wp-content/uploads/2024/03/folleto-diptico-que-es-el-ampa-del-cole-1.pdf" width="100%" height="500px" className="border rounded-lg"></iframe>
                </div>
                 <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="https://ampasanbenito.org/wp-content/uploads/2024/03/folleto-diptico-que-es-el-ampa-del-cole-1.pdf" target="_blank">
                        Abrir folleto en una nueva pestaña
                    </Link>
                </Button>
                <p className="font-semibold">¡No os quedeis con las ganas y entrar a formar parte de nuestra AMPA!!</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <HelpCircle className="h-6 w-6 text-primary" />
                <span>¿Qué Hacemos?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                    <p>Gestionamos las <strong>actividades extraescolares</strong> de manera gratuita, de forma que se abaratan las actividades. Esto hace posible el acceso a ellas de un mayor número de niños/as.</p>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                    <p>Intentamos solucionar problemas que puedan afectar a un colectivo de madres y padres. Por ejemplo: ¿Con quién dejamos a los niños/as si entramos a trabajar a las 8? Con sus compañeros/as en <strong>«Los Primeros del Cole»</strong>. ¿Y si en verano sigo saliendo a las 3 del trabajo? Pues organizamos la <strong>«Prolongación de jornada»</strong>. ¿Cómo nos podemos enterar de qué pasa con las leyes de educación? En una <strong>Asamblea extraordinaria</strong>.</p>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                    <p>Defendemos e intentamos, con todos los medios a nuestro alcance, mejorar la <strong>enseñanza pública</strong> porque creemos en ella. Lo público es de todos y todas.</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Settings className="h-6 w-6 text-primary" />
                <span>¿Cómo Funcionamos?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                    <p>Nos repartimos el trabajo a través de <strong>comisiones</strong>: cada padre o madre de la Junta Directiva asume llevar un tema.</p>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                    <p>Trabajamos a través de grupos de <strong>Whatsapp</strong> y nos reunimos al menos dos veces al año, todas las decisiones se toman democráticamente.</p>
                </li>
                 <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                    <p>Hacemos al menos una <strong>asamblea ordinaria</strong> al año, y las que hagan falta extraordinarias, para informar a todos los padres y madres y que todos puedan decidir.</p>
                </li>
               </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-primary" />
                <span>¿Por qué colaborar?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p>Para dar <strong>ejemplo a sus hijos/as</strong> de solidaridad y enseñarles los beneficios del trabajo en equipo.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p>Para que sus hijos/as sientan el cole en casa y su <strong>casa en el cole</strong>, mientras ven cómo se preocupan sus papás y mamás de sus pequeños grandes problemas.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p>Porque este es el mecanismo para poder <strong>decidir en muchos aspectos</strong> sobre la educación de los hijos/as en el colegio.</p>
                    </li>
                </ul>
            </CardContent>
          </Card>

          <section>
            <header className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
                Organización
              </h2>
               <p className="mt-4 text-lg text-muted-foreground">
             Un fin básico: la PARTICIPACIÓN de los PADRES Y MADRES en la EDUCACIÓN de sus hijos/as. Existe un ámbito individual y otro colectivo: los padres y madres deciden unirse voluntariamente para la consecución de determinados objetivos. La intervención colectiva es una garantía democrática.
            </p>
            </header>
            
             <Card className="overflow-hidden shadow-lg mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    <span>Planteamiento de Trabajo</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Para la consecución de ese objetivo fundamental se deben desarrollar una serie de servicios asociados:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p>Ser un punto de referencia claro para todos nuestros socios/as. Para ello se debe facilitar el acceso (correo electrónico, página web, buzón…) y las relaciones (acogida, escucha, buscar un buen contacto…)</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p>Asistir a los padres y madres en todo lo concerniente a la educación. Se debe INFORMAR, ASESORAR, APOYAR de forma clara, precisa y con datos o documentos pertinentes en todos los aspectos relativos a la dinámica educativa del centro escolar.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p>ACONSEJAR con sugerencias lo más adecuadas posibles.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p>Debe haber un SEGUIMIENTO, una continuidad en la preocupación por las necesidades.</p>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p>Crear un entorno cómodo y agradable, un ambiente y un espacio que facilite las tareas que se desarrollan.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p>Llevar a cabo actividades extraescolares que busquen el desarrollo global de la personalidad de nuestros hijos/as.</p>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p>Colaborar en la actividad educativa del Centro a través de sus relaciones con la Dirección, el profesorado y el Consejo Escolar.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="overflow-hidden shadow-lg mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BarChart className="h-6 w-6 text-primary" />
                    <span>Funciones y Organigrama</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p><strong>Presidencia:</strong> Representa a la Asociación y preside las reuniones de Junta y Asamblea.</p>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p><strong>Vicepresidencia:</strong> Sustituye a la Presidencia.</p>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p><strong>Secretaría:</strong> Custodia los libros oficiales de la Asociación y levanta acta de reuniones y asambleas.</p>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p><strong>Tesorería:</strong> Responsable de las finanzas de la Asociación y elabora el presupuesto anual.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-accent" />
                        <p><strong>Vocalías:</strong> Tienen las responsabilidades que le encomiende la Junta Directiva. Se encargan, por ejemplo, de cuidar alguna de las actividades extraescolares; de organizar actividades culturales; de mantener el contacto con la FAPA Giner de los Ríos…</p>
                    </li>
                   </ul>
                </CardContent>
              </Card>

            <div className="my-8 flex justify-center">
              <Image
                src="/images/pages/organizacion.webp"
                alt="Organización de la AMPA"
                data-ai-hint="team meeting"
                width={900}
                height={506}
                className="w-1/2 h-auto rounded-lg shadow-lg"
              />
            </div>

               <Alert variant="default" className="border-accent">
                <BookOpen className="h-4 w-4" />
                <AlertTitle className="text-accent font-bold">Estatutos AMPA San Benito</AlertTitle>
                <AlertDescription>
                    <Button asChild variant="link" className="p-0 h-auto mt-2">
                        <Link href="https://ampasanbenito.org/wp-content/uploads/2011/05/estatutos-ampa-san-benito.pdf" target="_blank">
                            Consulta aquí los estatutos completos de la asociación.
                        </Link>
                    </Button>
                </AlertDescription>
              </Alert>
          </section>

          <section>
             <header className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
                  Grupos de Trabajo
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Presentación de los grupos de trabajo de los que consta la AMPA:
                </p>
              </header>
              <Card className="overflow-hidden shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    <span>Nuestros Equipos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                        {workGroups.map((group, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-left hover:no-underline">
                                    <div className="flex items-center gap-4">
                                        <group.icon className="h-6 w-6 text-accent" />
                                        <span className="font-semibold text-lg">{group.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pl-12 text-muted-foreground">
                                    {typeof group.content === 'string' ? (
                                        <p>{group.content}</p>
                                    ) : (
                                        group.content
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
              </Card>
          </section>
          
          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
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
