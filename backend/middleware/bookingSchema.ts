import {z} from 'zod';

export const bookingSchema = z.object({
  when: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date provided.',
  }),
  lanes: z.number().int().min(1, { message: 'Please enter at least one lane to play.'}),
  players: z.number().int().min(1, { message: 'Please enter at least one player.'}),
  shoes: z.array(z.number().int().positive()),
})


export type BookingData = z.infer<typeof bookingSchema>;