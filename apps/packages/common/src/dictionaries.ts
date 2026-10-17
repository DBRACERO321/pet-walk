import { BookingStatus, DogSize } from "./enums";

export const BOOKING_STATUS_LABELS: Record<BookingStatus, string> = {
  [BookingStatus.PENDING]: "Pendiente de confirmación",
  [BookingStatus.ACCEPTED]: "Paseo Aceptado",
  [BookingStatus.IN_PROGRESS]: "Paseo en Curso",
  [BookingStatus.COMPLETED]: "Paseo Finalizado",
  [BookingStatus.CANCELLED]: "Paseo Cancelado",
};

export const DOG_SIZE_OPTIONS = [
  { value: DogSize.SMALL, label: "Pequeño (< 10 kg)" },
  { value: DogSize.MEDIUM, label: "Mediano (10 kg - 25 kg)" },
  { value: DogSize.LARGE, label: "Grande (> 25 kg)" },
];
