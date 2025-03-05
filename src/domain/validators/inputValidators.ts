export interface ValidationRule {
  rule: (value: string) => boolean;
  message: string;
}

export const validateField = (
  value: string,
  rules: ValidationRule[]
): string | undefined => {
  for (let i = 0; i < rules.length; i++) {
    if (!rules[i].rule(value)) {
      return rules[i].message;
    }
  }
  return undefined;
};

// Örnek Kurallar
export const emailRules: ValidationRule[] = [
  { rule: (val) => val.trim() !== "", message: "E-posta boş olamaz!" },
  {
    rule: (val) => /\S+@\S+\.\S+/.test(val),
    message: "Geçerli bir e-posta girin!",
  },
];

export const passwordRules: ValidationRule[] = [
  { rule: (val) => val.trim() !== "", message: "Şifre boş olamaz!" },
  {
    rule: (val) => val.length >= 6,
    message: "Şifre en az 6 karakter olmalıdır!",
  },
];

export const usernameRules: ValidationRule[] = [
  { rule: (val) => val.trim() !== "", message: "Kullanıcı adı boş olamaz!" },
  {
    rule: (val) => val.length >= 3,
    message: "Kullanıcı adı en az 3 karakter olmalıdır!",
  },
];
