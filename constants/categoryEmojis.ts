export const CATEGORY_EMOJIS = {
  FOOD: "🍔",
  ENTERTAINMENT: "🎬",
  TRANSPORTATION: "🚗",
  HOUSING: "🏠",
  UTILITIES: "💡",
  INSURANCE: "�️",
  HEALTHCARE: "🏥",
  PERSONAL: "👤",
  EDUCATION: "📚",
  SAVINGS: "💰",
  INCOME: "💰",
  TRANSFER: "💸",
} as const;

// Type for category emoji keys
export type CategoryEmojiKey = keyof typeof CATEGORY_EMOJIS;

// Helper function to get emoji by category
export const getCategoryEmoji = (category: CategoryEmojiKey): string => {
  return CATEGORY_EMOJIS[category];
};
