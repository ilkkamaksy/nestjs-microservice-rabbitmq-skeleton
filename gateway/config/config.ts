export const RABBITMQ_DEFAULT_USER = process.env.RABBITMQ_DEFAULT_USER || '';
export const RABBITMQ_DEFAULT_PASS = process.env.RABBITMQ_DEFAULT_PASS || '';
export const RABBITMQ_HOST = process.env.RABBITMQ_HOST || '';
export const RABBITMQ_PORT = parseInt(process.env.RABBITMQ_PORT) || 5672;
export const RABBITMQ_QUEUE_SERVICE_A =
  process.env.RABBITMQ_QUEUE_SERVICE_A || '';
export const RABBITMQ_QUEUE_SERVICE_B =
  process.env.RABBITMQ_QUEUE_SERVICE_B || '';
