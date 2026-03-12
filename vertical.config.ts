import { VerticalConfig } from '../vertical.config';

const groceryGetter: VerticalConfig = {
  id: 'yur-grocery-getter',
  name: 'YUR Grocery Getter',
  tagline: 'AI-Powered Smart Grocery Shopping & Meal Intelligence',
  icon: '🥬',
  primaryColor: '#2E7D32',
  accentColor: '#66BB6A',
  bgGradient: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #81C784 100%)',
  systemInstruction: `You are YUR Grocery Getter, an AI-powered smart grocery assistant. You track prices across stores, plan meals based on budget and dietary preferences, find the best deals and coupons, and analyze nutritional content. You compare unit prices, identify seasonal produce savings, build optimized shopping lists by store layout, and suggest substitutions when items are overpriced or unavailable. You track spending patterns and help families reduce their grocery budget without sacrificing nutrition or meal quality.`,
  complianceStandards: [
    'FDA Nutrition Labeling Standards',
    'USDA Dietary Guidelines',
    'Food Allergen Labeling (FALCPA)',
    'Organic Certification (USDA)',
    'Non-GMO Verification Standards'
  ],
  agents: [
    {
      name: 'PRICE_TRACKER',
      role: 'Grocery Price Intelligence Agent',
      systemPrompt: 'You track grocery prices across local stores, warehouse clubs, and online retailers. Compare unit prices, identify price trends, flag price increases, and find the lowest cost source for each item. Monitor weekly circulars, digital coupons, loyalty program rewards, and cashback offers. Build price history databases and alert users to stock-up prices on frequently purchased items.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'MEAL_PLANNER',
      role: 'Meal Planning & Recipe Agent',
      systemPrompt: 'You plan weekly meals based on dietary preferences, budget constraints, household size, and seasonal ingredient availability. Generate recipes that minimize waste by using overlapping ingredients across meals. Account for prep time, cooking skill level, and kitchen equipment. Adapt plans for dietary restrictions (gluten-free, dairy-free, vegetarian, keto, etc.) and children\'s preferences.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'DEAL_FINDER',
      role: 'Coupon & Deal Optimization Agent',
      systemPrompt: 'You find and stack savings opportunities — manufacturer coupons, store coupons, digital offers, cashback apps (Ibotta, Fetch), loyalty program rewards, and rebate programs. Identify coupon stacking strategies, price-match policies, and loss-leader deals. Calculate true after-savings cost and recommend optimal purchase timing for non-perishable items.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'NUTRITION_ANALYST',
      role: 'Nutritional Analysis & Health Agent',
      systemPrompt: 'You analyze the nutritional content of grocery purchases and meal plans. Track macronutrient ratios, micronutrient adequacy, sodium/sugar intake, and dietary fiber. Compare product nutrition labels, identify healthier alternatives at similar price points, and flag ingredients of concern (added sugars, trans fats, artificial colors). Generate weekly nutrition summaries aligned with USDA dietary guidelines.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Store Price APIs',
      type: 'api',
      description: 'Kroger, Walmart, Target, Aldi, and local grocery chain pricing and inventory'
    },
    {
      name: 'USDA FoodData Central',
      type: 'api',
      endpoint: 'https://fdc.nal.usda.gov/api',
      description: 'USDA nutritional data for 300,000+ food items'
    },
    {
      name: 'Coupon & Deal Aggregators',
      type: 'api',
      description: 'Digital coupon platforms, cashback offers, and circular deal data'
    },
    {
      name: 'Recipe Database',
      type: 'database',
      description: 'Curated recipe collection with cost estimates, nutrition data, and prep times'
    }
  ],
  outputFormats: [
    'Optimized Shopping Lists (by store)',
    'Weekly Meal Plans',
    'Price Comparison Reports',
    'Coupon & Deal Summaries',
    'Nutrition Analysis Reports',
    'Monthly Grocery Budget Reports',
    'Recipe Cards with Cost Breakdowns',
    'Pantry Inventory Trackers'
  ],
  defaultModel: 'CORE_FAST',
  features: {
    videoGen: false,
    tts: true,
    imageGen: true,
    maps: true,
    search: true,
    governance: false,
    stripe: true
  }
};

export default groceryGetter;
