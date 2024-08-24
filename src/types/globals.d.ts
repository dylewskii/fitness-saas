export {};

declare global {
  interface CustomJwtSessionClaims {
    userId: string;
    imageUrl?: string;
    lastName?: string;
    createdAt: string;
    firstName?: string;
    updatedAt: string;
    primaryEmail?: string;
  }
}
