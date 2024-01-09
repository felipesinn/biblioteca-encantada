export interface ValidationResult {
  errors: {
    title?: string | undefined;
    author?: string | undefined;
    gender?: string | undefined;
    description?: string | undefined;
  };
}
