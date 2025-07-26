import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Sprout, Heart, Milestone, Drama, Palmtree, Gamepad2, ShieldCheck, Paintbrush, Network, Thermometer, UserCog } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    content: "Se ha conseguido la peatonalización de la calle Mariano Díaz, los pasos de peatones en las dos entradas de infantil, los aparcabicis. Somos miembros de la revuelta escolar. Pero la actividad estrella es, sin duda, el Bicibús de los viernes (más información en la web). Responsable del grupo: Rubén y Bubi",
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

export default function GruposDeTrabajoPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Grupos de Trabajo
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Presentación de los grupos de trabajo de los que consta la AMPA:
            </p>
          </header>

          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
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
        </div>
      </div>
    </div>
  );
}
