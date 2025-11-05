import { Phone, MapPin, Users, Sparkles, Trees } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContactForm } from "@/components/ContactForm"

export default function Home() {
  const whatsappNumber = "2462132732"
  const whatsappMessage = encodeURIComponent("Hola, me gustaría cotizar un evento en Cabaña María María")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a href="#inicio">
                <img src="/logo.JPG" alt="Cabaña María María Logo" className="h-10 w-auto" />
              </a>
              <span className="text-2xl font-bold text-amber-800">
                Cabaña María María
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#inicio" className="text-amber-800 hover:text-amber-600 transition-colors">
                Inicio
              </a>
              <a href="#galeria" className="text-amber-800 hover:text-amber-600 transition-colors">
                Galería
              </a>
              <a href="#servicios" className="text-amber-800 hover:text-amber-600 transition-colors">
                Servicios
              </a>
              <a href="#contacto" className="text-amber-800 hover:text-amber-600 transition-colors">
                Contacto
              </a>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Reservar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 to-amber-900/80 z-10" />
        <img
          src="/hero.jpg"
          alt="Cabaña María María"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Celebra tus mejores momentos en Cabaña María María
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty">
            Renta desde $3,700 · Jardín · Juegos infantiles · Estacionamiento
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-6">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Cotiza tu evento
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-800 mb-6">Sobre Nosotros</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cabaña María María es un espacio que nació del amor por celebrar momentos especiales. Antes fuimos un
              restaurante familiar, y ahora nos hemos transformado en el lugar perfecto para tus eventos más
              importantes: bodas, XV años, cumpleaños y bautizos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Trees className="h-8 w-8 text-amber-700" />
                </div>
                <CardTitle className="text-amber-800">Ambiente Natural</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Disfruta de nuestro hermoso jardín rodeado de naturaleza, perfecto para crear recuerdos inolvidables.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-amber-700" />
                </div>
                <CardTitle className="text-amber-800">Espacio Amplio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Contamos con salón techado y jardín al aire libre para que tus invitados disfruten cómodamente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-amber-700" />
                </div>
                <CardTitle className="text-amber-800">Atención Personalizada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Nos dedicamos a hacer de tu evento algo único, con el cuidado y atención que mereces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-800 text-center mb-12">Nuestras Instalaciones</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img src="/salon-principal.jpg" alt="Salón de eventos" className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Salón Principal</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img src="/jardin.JPG" alt="Jardín" className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Jardín</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img src="/juegos-infantiles.JPG" alt="Juegos infantiles" className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Juegos Infantiles</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img src="/inflable.jpg" alt="Inflables" className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Inflables</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img src="/estacionamiento.JPG" alt="Estacionamiento" className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Estacionamiento</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img src="/decoracion.jpg" alt="Decoración" className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">Decoración</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-800 text-center mb-4">Paquetes y Precios</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Elige el paquete perfecto para tu evento</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-amber-200 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-amber-50 to-amber-100">
                <CardTitle className="text-2xl text-amber-800">Básico</CardTitle>
                <CardDescription className="text-3xl font-bold text-amber-700 mt-2">$3,700</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Mesas con mantel blanco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Sillas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Vaso de vidrio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Plato base</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Juego de cubiertos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Parrilla para calentar con alimentos con gas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Refrigerador (22 pies)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Juegos infantiles </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Papel para baños</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Parrilla para asar alimentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Estacionamiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>8 horas + 1 hora adicional (antes o después del evento)</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Reservar ahora
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-amber-400 shadow-xl hover:shadow-2xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Más Popular
              </div>
              <CardHeader className="bg-gradient-to-br from-amber-50 to-amber-100">
                <CardTitle className="text-2xl text-amber-800">Premium</CardTitle>
                <CardDescription className="text-3xl font-bold text-amber-700 mt-2">$6,300</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span className="font-semibold">Todo lo del paquete Básico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Mesa para 12 comensales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Sillas Tiffany</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Reservar ahora
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-amber-200 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-amber-50 to-amber-100">
                <CardTitle className="text-2xl text-amber-800">Deluxe</CardTitle>
                <CardDescription className="text-3xl font-bold text-amber-700 mt-2">$7,200</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span className="font-semibold">Todo lo del paquete Premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Decoración completa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Mobiliario premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Coordinación del evento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Servicio de meseros</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Reservar ahora
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-800 text-center mb-12">Contáctanos</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-amber-800">Envíanos un mensaje</CardTitle>
                <CardDescription>Te responderemos lo antes posible</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-800 mb-1">Dirección</h3>
                      <p className="text-gray-600">
                        Privada El Palmar No. 5<br />
                        La Trinidad Tepehitec, Tlaxcala
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-800 mb-1">Teléfono</h3>
                      <a href={`tel:${whatsappNumber}`} className="text-gray-600 hover:text-amber-700">
                        (246) 213 2732
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-amber-800 mb-3">Ubicación</h3>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.40665878483!2d-98.25838622452014!3d19.308152344642966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd972fa12302d%3A0xe268168bb773c60c!2sCaba%C3%B1a%20Maria%20Maria!5e0!3m2!1ses-419!2smx!4v1762359733111!5m2!1ses-419!2smx" 
                    width="100%" 
                    height="100%"
                    style={{border: 0}}
                    loading="lazy" 
                    // referrerpolicy="no-referrer-when-downgrade" 
                    title="Ubicación de Cabaña María María"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
              <a href="#inicio">
                <img src="/logo.JPG" alt="Cabaña María María Logo" className="h-10 w-auto" />
              </a>
              <span className="text-2xl font-bold ">
                Cabaña María María
              </span>
              </div>
              <p className="text-amber-100">
                El lugar perfecto para celebrar tus momentos más especiales en un ambiente natural y acogedor.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-amber-100 hover:text-white transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="text-amber-100 hover:text-white transition-colors">
                    Galería
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-amber-100 hover:text-white transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-amber-100 hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contacto</h3>
              <ul className="space-y-2 text-amber-100">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Privada El Palmar No. 5, La Trinidad Tepehitec, Tlaxcala</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a href={`tel:${whatsappNumber}`} className="hover:text-white transition-colors">
                    (246) 213 2732
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-amber-800 pt-8 text-center text-amber-100">
            <p>&copy; 2025 Cabaña María María. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}
