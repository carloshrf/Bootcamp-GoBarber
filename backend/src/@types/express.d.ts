declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
// adiciona uma nova tipagem para o express, no caso, o type user
