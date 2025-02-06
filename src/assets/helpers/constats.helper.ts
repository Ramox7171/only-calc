export  interface FormData {
    avgMonthlyReach: string;
    convRate: string;
    subPrice: string;
    platformCommission: string;
  }

  export enum ActiveContent {
    About ="about",
    Calculator ="calculator",
    Hello = "hello"
  }


  export const howto = [
    {id: 1,
        text: "Enter your average REAL monthly reach on the platform from which you're redirecting potential fans."
    },
    {
        id: 2,
        text: "Provide the conversion rate. On average, you can expect to convert between 1-5% of your actual followers from your reach onto the fan platform."
    },
    {id:3, text: "Enter the platform's commission percentage from subscriptions. For example blue bird takes 20%"},
    {id:4, text:"Enter the price of your subscription."},
    {id:5,text: "Click Calculate :)"}
  ];


  export const aboutTxt = [
    {id: 1, paragraph: "The calculator was created to help estimate a creator's potential earnings on fan platforms. It was developed based on discussions with friendly creators publishing on platforms like *fans. This is the first version, so if you have any suggestions regarding its functionality, feel free to reach out by clicking the small button at the bottom of the screen."}
    ,{id:2, paragraph: "It estimates potential earnings based on the average number of real followers on a profile, derived from generated reach, considering the specified conversion rate, average subscription price in USD, and platform commission."}
    ,{id: 3, paragraph: "It is important to note that creators often combine their income from various similar platforms, custom videos, tips, live streams, or sales of various items."}
    ,{id: 4, paragraph: "The provided amounts should be treated as rough estimates, offering a general idea of how earnings might work on such platforms."}
];

  