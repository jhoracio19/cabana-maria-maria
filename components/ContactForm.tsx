"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [name, setName] = useState("")
  const [eventType, setEventType] = useState("")
  const [date, setDate] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const text = `Hola, soy ${name}. Quisiera cotizar un evento (${eventType}) para el día ${date}. Mensaje: ${message}`
    const url = `https://wa.me/2462132732?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo
        </label>
        <Input
          id="name"
          placeholder="Tu nombre"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-1">
          Tipo de evento
        </label>
        <Input
          id="event"
          placeholder="Boda, XV años, cumpleaños..."
          required
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
          Fecha del evento
        </label>
        <Input
          id="date"
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje
        </label>
        <Textarea
          id="message"
          placeholder="Cuéntanos sobre tu evento..."
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
        Enviar por WhatsApp
      </Button>
    </form>
  )
}


