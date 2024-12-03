interface LessonSection {
  title: string;
  content: string;
  example?: string;
}

export function getLessonContent(moduleId: string): LessonSection[] {
  switch (moduleId) {
    case 'basics':
      return [
        {
          title: 'What is Money?',
          content: 'Money is what we use to buy things we need and want. It\'s important to understand how to use money wisely!',
          example: 'When you get $10 allowance, you can buy a $5 toy and save $5 for later.',
        },
        {
          title: 'Needs vs. Wants',
          content: 'Needs are things we must have to live, like food and clothes. Wants are extra things that make us happy but aren\'t necessary.',
          example: 'A healthy lunch is a need, but candy is a want.',
        },
        {
          title: 'Making Smart Choices',
          content: 'Before spending money, ask yourself: Do I need this? Is it worth the price? Could I use this money better?',
          example: 'Instead of buying a $4 toy that might break quickly, you could save for a $12 toy that will last longer.',
        },
      ];

    case 'savings':
      return [
        {
          title: 'Why Save Money?',
          content: 'Saving money helps us prepare for the future and buy bigger things we want.',
          example: 'If you save $2 every week, in 5 weeks you\'ll have $10 to buy something special!',
        },
        {
          title: 'Setting Savings Goals',
          content: 'A savings goal is like a mission to save money for something specific.',
          example: 'Goal: Save $20 for a new game by saving $5 each week for 4 weeks.',
        },
        {
          title: 'The Power of Patience',
          content: 'Saving takes time, but watching your money grow is exciting!',
          example: 'A piggy bank starts empty, but gets fuller every time you add coins.',
        },
      ];

    case 'investing':
      return [
        {
          title: 'Growing Your Money',
          content: 'Investing is like planting a money tree - your money can grow over time!',
          example: 'If you invest $10, it might grow to $11 or more over time.',
        },
        {
          title: 'Different Ways to Invest',
          content: 'You can invest in many things, like companies you believe in.',
          example: 'Buying a share of a company is like owning a tiny piece of that business.',
        },
        {
          title: 'Being Patient with Investments',
          content: 'Investments take time to grow, just like plants need time to get bigger.',
          example: 'A $5 investment might become $6 in a month, then $7, and keep growing!',
        },
      ];

    default:
      return [];
  }
}