export class AppError extends Error {
  constructor(statusCode, code, message) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
  }
}

export function errorHandler(err, req, res, next) {
  const status = err.statusCode ?? 500;
  const code = err.code ?? 'INTERNAL_ERROR';
  const message = err.statusCode ? err.message : 'Lỗi hệ thống';
  res.status(status).json({ error: { code, message } });
}
