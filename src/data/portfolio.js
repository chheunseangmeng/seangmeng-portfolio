import profileImage from "../assets/pf.webp";
import cvFile from "../assets/chheun_seangmeng_CV.pdf";
import projectQr from "../assets/poster.webp";
import projectInventory from "../assets/vc-png.webp";
import projectVoice from "../assets/python-algorithm.webp";
import projectExpense from "../assets/java-script.webp";
import projectSport from "../assets/web-design.webp";
import projectKasikor from "../assets/psa-kasikor.webp";
import galleryAchievement from "../assets/image/Achievement.webp";
import galleryCameraman from "../assets/image/Camerman.webp";
import galleryExchangeProgram from "../assets/image/exchange program.webp";
import galleryExchange from "../assets/image/exchange.webp";
import galleryMediaTrainer from "../assets/image/Media Trainer.webp";
import galleryAyle from "../assets/image/AYLE.webp";
import galleryCopilot from "../assets/image/copilot.webp";
import galleryExplanation from "../assets/image/Explaination.webp";
import galleryDrawing from "../assets/image/Drawing.webp";
import galleryOutstanding from "../assets/image/Out standing.webp";
import galleryPresentPython from "../assets/image/Present-python.webp";
import galleryVc1 from "../assets/image/VC1.webp";
import galleryTi from "../assets/image/TI.webp";
import galleryTic from "../assets/image/TIC.webp";
import galleryTi2 from "../assets/image/TI2.webp";
import galleryVc2 from "../assets/image/VC2.webp";
import gallerySport from "../assets/image/Sport challenge.webp";
import gallerySolidarity from "../assets/image/Solidarity.webp";
import galleryPodcast from "../assets/image/PodCast.webp";

const t = (en, km) => ({ en, km });

export const portfolioData = {
  nav: [
    { id: "home", ...t("Home", "ទំព័រដើម") },
    { id: "about", ...t("About", "អំពីខ្ញុំ") },
    { id: "skills", ...t("Skills", "ជំនាញ") },
    { id: "experience", ...t("Experience", "បទពិសោធន៍") },
    { id: "projects", ...t("Projects", "គម្រោង") },
    { id: "contact", ...t("Contact", "ទំនាក់ទំនង") },
  ],
  hero: {
    eyebrow: t(
      "Designing useful digital experiences",
      "រចនាបទពិសោធន៍ឌីជីថលដែលមានប្រយោជន៍",
    ),
    name: t("Chheun Seangmeng", "ឈឺន សៀងម៉េង"),
    role: t(
      "Web Developer and Product-Focused Builder",
      "អ្នកអភិវឌ្ឍន៍គេហទំព័រ និងអ្នកបង្កើតផលិតផល",
    ),
    description: t(
      "I turn ideas into polished web experiences with strong structure, clear interaction, and a practical engineering mindset.",
      "ខ្ញុំបម្លែងគំនិតទៅជាបទពិសោធន៍គេហទំព័រដែលរលូន មានរចនាសម្ព័ន្ធច្បាស់លាស់ អន្តរកម្មល្អ និងគំនិតវិស្វកម្មដែលអាចអនុវត្តបាន។",
    ),
    primaryCta: t("Start a Project", "ចាប់ផ្តើមគម្រោង"),
    secondaryCta: t("Download CV", "ទាញយកប្រវត្តិរូប"),
    cardLabel: t("Currently focused on", "កំពុងផ្តោតលើ"),
    cardValue: "Vue 3, UI Motion, SQL",
    cvUrl: cvFile,
    image: profileImage,
    floatingSkills: [
      {
        label: "Vue",
        icon: "https://img.icons8.com/?size=160&id=eETV3RNHVrWA&format=png",
        style: "--x: 10%; --y: 8%; --r: -8deg;",
      },
      {
        label: "Laravel",
        icon: "https://img.icons8.com/?size=128&id=hUvxmdu7Rloj&format=png",
        style: "--x: 75%; --y: 12%; --r: 10deg;",
      },
      {
        label: "JS",
        icon: "https://img.icons8.com/?size=96&id=tGvHBPJaKqEd&format=gif&color=f7f7f7",
        style: "--x: 82%; --y: 72%; --r: -4deg;",
      },
      {
        label: "SQL",
        icon: "https://img.icons8.com/?size=96&id=laYYF3dV0Iew&format=png",
        style: "--x: 8%; --y: 76%; --r: 7deg;",
      },
    ],
  },
  about: {
    heading: {
      eyebrow: t("About me", "អំពីខ្ញុំ"),
      title: t(
        "Building with purpose, not just visuals",
        "បង្កើតដោយមានគោលបំណង មិនមែនត្រឹមតែរូបរាង",
      ),
      subtitle: t(
        "I care about elegant code, strong collaboration, and interfaces that feel alive.",
        "ខ្ញុំយកចិត្តទុកដាក់លើកូដដែលស្អាត ការសហការដែលរឹងមាំ និងអ៊ីនធើហ្វេសដែលមានជីវិត។",
      ),
    },
    story: t(
      "My name is Chheun Seangmeng, a Computer Science student at Passerelles Numeriques Cambodia specializing in web development. I enjoy combining clean implementation, problem solving, and thoughtful interface design to build products that feel modern and useful.",
      "ខ្ញុំឈ្មោះ ឈឺន សៀងម៉េង ជាសិស្សវិទ្យាសាស្ត្រកុំព្យូទ័រនៅ Passerelles Numeriques Cambodia ដែលមានជំនាញផ្នែកអភិវឌ្ឍន៍គេហទំព័រ។ ខ្ញុំចូលចិត្តបញ្ចូលគ្នារវាងការអនុវត្តកូដស្អាត ការដោះស្រាយបញ្ហា និងការរចនាអ៊ីនធើហ្វេសប្រកបដោយការគិត ដើម្បីបង្កើតផលិតផលទំនើប និងមានប្រយោជន៍។",
    ),
    details: [
      { label: t("Full Name", "ឈ្មោះពេញ"), value: "Chheun Seangmeng" },
      { label: t("Date of Birth", "ថ្ងៃខែឆ្នាំកំណើត"), value: "June 19, 2006" },
      { label: t("Location", "ទីតាំង"), value: "Phnom Penh, Cambodia" },
      {
        label: t("Education", "ការអប់រំ"),
        value: "Passerelles Numeriques Cambodia",
      },
    ],
    stats: [
      {
        value: "2+",
        label: t("Years learning and shipping", "ឆ្នាំនៃការរៀន និងការអភិវឌ្ឍ"),
      },
      { value: "6+", label: t("Projects completed", "គម្រោងបានបញ្ចប់") },
      {
        value: "15+",
        label: t("Technologies explored", "បច្ចេកវិទ្យាដែលបានសិក្សា"),
      },
    ],
  },
  skills: {
    heading: {
      eyebrow: t("Capabilities", "សមត្ថភាព"),
      title: t(
        "Front-end craft with practical back-end depth",
        "ស្នាដៃ Front-end ជាមួយជំនាញ Back-end ដែលអាចប្រើបាន",
      ),
      subtitle: t(
        "A mix of interface building, data work, and team tools I use across projects.",
        "ការរួមបញ្ចូលគ្នានៃការបង្កើតអ៊ីនធើហ្វេស ការងារទិន្នន័យ និងឧបករណ៍ក្រុមដែលខ្ញុំប្រើក្នុងគម្រោង។",
      ),
    },

    groups: [
      {
        title: t("Programming Languages", "ភាសា សរសេរ​កម្មវិធី"),
        items: [
          {
            name: "JavaScript",
            icons: [
              "https://img.icons8.com/?size=96&id=tGvHBPJaKqEd&format=gif&color=f7f7f7",
            ],
          },
          {
            name: "Python",
            icons: [
              "https://img.icons8.com/?size=96&id=Rc0Xn5AtE8kX&format=gif&color=f7f7f7",
            ],
          },
          {
            name: "PHP",
            icons: ["https://cdn-icons-png.flaticon.com/128/5968/5968332.png"],
          },
          {
            name: "Node.js",
            icons: [
              "https://img.icons8.com/?size=96&id=hsPbhkOH4FMe&format=png",
            ],
          },
        ],
      },
      {
        title: t("Frameworks", "Framework"),
        items: [
          {
            name: "Vue.js",
            icons: [
              "https://img.icons8.com/?size=160&id=eETV3RNHVrWA&format=png",
            ],
          },
          {
            name: "Laravel",
            icons: [
              "https://img.icons8.com/?size=128&id=hUvxmdu7Rloj&format=png",
            ],
          },
          {
            name: "Flutter",
            icons: [
              "https://img.icons8.com/?size=160&id=5pu47piHKg1I&format=png",
            ],
          },
          {
            name: "Bootstrap",
            icons: [
              "https://img.icons8.com/?size=96&id=EzPCiQUqWWEa&format=png",
            ],
          },
          {
            name: "Tailwind CSS",
            icons: [
              "https://img.icons8.com/?size=128&id=FnnFuAIw4e8j&format=png",
            ],
          },
        ],
      },
      {
        title: t("Database & Tools", "មូលដ្ឋានទិន្នន័យ & ឧបករណ៍"),
        items: [
          {
            name: "HTML / CSS",
            icons: [
              "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
              "https://cdn-icons-png.flaticon.com/128/732/732190.png",
              "https://cdn-icons-png.flaticon.com/128/919/919831.png",
            ],
          },
          {
            name: "MySQL",
            icons: [
              "https://img.icons8.com/?size=160&id=QeIg9siFKGgp&format=png",
            ],
          },
          {
            name: "SQL Server",
            icons: [
              "https://img.icons8.com/?size=96&id=laYYF3dV0Iew&format=png",
            ],
          },
        ],
      },
    ],
    tools: [
      "OOP",
      "Git/GitHub",
      "VS Code",
      "Figma",
      "Jira",
      "Power BI",
      "AWS",
      "Linux",
      "Postman",
      "TypeScript",
      "SSMS",
      "SSRS",
      "SSIS",
      "AI Prompting",
    ],
  },
  experience: {
    heading: {
      eyebrow: t("Experience", "បទពិសោធន៍"),
      title: t(
        "Work and school projects that built momentum",
        "ការងារ និងគម្រោងសាលាដែលបង្កើតបទពិសោធន៍",
      ),
      subtitle: t(
        "A timeline of roles where I shipped features, coordinated teams, and learned from real constraints.",
        "បន្ទាត់ពេលវេលានៃតួនាទីដែលខ្ញុំបានអភិវឌ្ឍមុខងារ សម្របសម្រួលក្រុម និងរៀនពីកម្រិតកំណត់ជាក់ស្តែង។",
      ),
    },
    items: [
      {
        date: "Sep - Dec 2025",
        role: t("Data Engineer Intern", "កម្មសិក្សា - វិស្វករទិន្នន័យ"),
        company: "Dai ichi Life Insurance Cambodia",
        description: t(
          "Responded to data requests and extracted warehouse information using SQL Server, SSMS, SSRS, SSIS, and Python.",
          "ឆ្លើយតបនឹងសំណើទិន្នន័យ និងស្រង់ព័ត៌មានពីឃ្លាំងទិន្នន័យដោយប្រើ SQL Server, SSMS, SSRS, SSIS និង Python។",
        ),
      },
      {
        date: "Jul - Aug 2025",
        role: t("FullStack Developer", "អ្នកអភិវឌ្ឍន៍ FullStack"),
        company: "QR Code Menu Application - School Project",
        description: t(
          "Built a mobile application with Flutter, Laravel, and MySQL while managing agile workflows with Jira and GitHub.",
          "បង្កើតកម្មវិធីទូរសព្ទដោយប្រើ Flutter, Laravel និង MySQL ព្រមទាំងគ្រប់គ្រងលំហូរការងារ agile ជាមួយ Jira និង GitHub។",
        ),
      },
      {
        date: "Feb - May 2025",
        role: t("Scrum Master", "Scrum Master"),
        company: "Stock Inventory Management - School Project",
        description: t(
          "Led a five-person team to design and implement a stock inventory system using HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL.",
          "ដឹកនាំក្រុមប្រាំនាក់ក្នុងការរចនា និងអនុវត្តប្រព័ន្ធគ្រប់គ្រងសារពើភ័ណ្ឌដោយប្រើ HTML, CSS, Bootstrap, JavaScript, PHP និង MySQL។",
        ),
      },
      {
        date: "Jan 2025",
        role: t("Team Leader", "ប្រធានក្រុម"),
        company: "Expense Tracker App - School Project",
        description: t(
          "Led development of an expense tracker with a clean interface using HTML, CSS, and JavaScript.",
          "ដឹកនាំការអភិវឌ្ឍកម្មវិធីតាមដានចំណាយជាមួយអ៊ីនធើហ្វេសស្អាតដោយប្រើ HTML, CSS និង JavaScript។",
        ),
      },
    ],
  },
  projects: {
    heading: {
      eyebrow: t("Projects", "គម្រោង"),
      title: t(
        "Selected work with practical outcomes",
        "ស្នាដៃដែលបានជ្រើសរើស និងមានលទ្ធផលជាក់ស្តែង",
      ),
      subtitle: t(
        "From prototypes to hosted demos, these are projects that reflect how I think and build.",
        "ចាប់ពីគំរូដំបូងរហូតដល់ demo ដែលបានបង្ហោះ គម្រោងទាំងនេះបង្ហាញពីរបៀបគិត និងរបៀបបង្កើតរបស់ខ្ញុំ។",
      ),
    },
    unavailableMessage: t(
      "This project is not hosted yet, but the case study is still part of my portfolio.",
      "គម្រោងនេះមិនទាន់បានបង្ហោះនៅឡើយទេ ប៉ុន្តែករណីសិក្សានៅតែជាផ្នែកមួយនៃប្រវត្តិការងាររបស់ខ្ញុំ។",
    ),
    items: [
      {
        image: projectQr,
        title: t("QR Code Menu App", "កម្មវិធីមឺនុយ QR Code"),
        description: t(
          "A digital restaurant menu system built with Flutter and Laravel.",
          "ប្រព័ន្ធមឺនុយភោជនីយដ្ឋានឌីជីថលដែលបង្កើតដោយ Flutter និង Laravel។",
        ),
        tags: ["Flutter", "Laravel", "MySQL"],
        cta: t("View Project", "មើលគម្រោង"),
        url: "",
      },
      {
        image: projectInventory,
        title: t("Stock Inventory System", "ប្រព័ន្ធគ្រប់គ្រងសារពើភ័ណ្ឌ"),
        description: t(
          "A business-oriented inventory management solution with structured workflows.",
          "ដំណោះស្រាយគ្រប់គ្រងសារពើភ័ណ្ឌសម្រាប់អាជីវកម្មជាមួយលំហូរការងារដែលមានរចនាសម្ព័ន្ធ។",
        ),
        tags: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
        cta: t("View Project", "មើលគម្រោង"),
        url: "",
      },
      {
        image: projectVoice,
        title: t("Voice-Controlled Music", "កម្មវិធីចាក់តន្ត្រីដោយសំឡេង"),
        description: t(
          "A Python-based music player with speech recognition controls.",
          "កម្មវិធីចាក់តន្ត្រីដោយ Python ដែលគ្រប់គ្រងដោយការទទួលស្គាល់សំឡេង។",
        ),
        tags: ["Python", "Tkinter", "AI"],
        cta: t("View Project", "មើលគម្រោង"),
        url: "",
      },
      {
        image: projectExpense,
        title: t("Expense Tracker App", "កម្មវិធីតាមដានការចំណាយ"),
        description: t(
          "A responsive app to track income, expense, and balance with clarity.",
          "កម្មវិធីឆ្លើយតបសម្រាប់តាមដានចំណូល ចំណាយ និងសមតុល្យយ៉ាងច្បាស់។",
        ),
        tags: ["HTML", "CSS", "JavaScript"],
        cta: t("Open Demo", "បើក Demo"),
        url: "https://g2-a-expense-tracker-app.vercel.app/",
      },
      {
        image: projectSport,
        title: t("PNC Sport Club Website", "គេហទំព័រក្លឹបកីឡា PNC"),
        description: t(
          "A responsive website designed with SASS and modern web standards.",
          "គេហទំព័រឆ្លើយតបដែលរចនាដោយ SASS និងស្តង់ដារគេហទំព័រសម័យទំនើប។",
        ),
        tags: ["HTML", "SASS", "Figma"],
        cta: t("Open Demo", "បើក Demo"),
        url: "https://sport-club-webproject.netlify.app/",
      },
      {
        image: projectKasikor,
        title: t("P'sa Kasikor", "ផ្សារកសិករ"),
        description: t(
          "A concept demo that came from experimenting while learning JavaScript.",
          "Demo គំនិតមួយដែលកើតចេញពីការសាកល្បងខណៈពេលរៀន JavaScript។",
        ),
        tags: ["HTML", "CSS", "JavaScript"],
        cta: t("Open Demo", "បើក Demo"),
        url: "https://psa-kasikor.vercel.app/",
      },
    ],
  },
  gallery: {
    heading: {
      eyebrow: t("Social moments", "សកម្មភាពសង្គម"),
      title: t(
        "Highlights from learning, teamwork, and community",
        "ចំណុចពិសេសពីការរៀន ការងារជាក្រុម និងសហគមន៍",
      ),
      subtitle: t(
        "A moving gallery to show the people and moments behind the technical work.",
        "វិចិត្រសាលចល័តសម្រាប់បង្ហាញមនុស្ស និងពេលវេលាដែលនៅពីក្រោយការងារបច្ចេកទេស។",
      ),
    },
    rows: [
      [
        { src: galleryAchievement, alt: "Achievement" },
        { src: galleryCameraman, alt: "Cameraman" },
        { src: galleryExchangeProgram, alt: "Exchange Program" },
        { src: galleryExchange, alt: "Exchange" },
        { src: galleryMediaTrainer, alt: "Media Trainer" },
        { src: galleryAyle, alt: "AYLE" },
        { src: galleryCopilot, alt: "Copilot" },
        { src: galleryExplanation, alt: "Explanation" },
        { src: galleryDrawing, alt: "Drawing" },
      ],
      [
        { src: galleryOutstanding, alt: "Outstanding" },
        { src: galleryPresentPython, alt: "Present Python" },
        { src: galleryVc1, alt: "VC1" },
        { src: galleryTi, alt: "TI" },
        { src: galleryTic, alt: "TIC" },
        { src: galleryTi2, alt: "TI2" },
        { src: galleryVc2, alt: "VC2" },
        { src: gallerySport, alt: "Sport Challenge" },
        { src: gallerySolidarity, alt: "Solidarity" },
        { src: galleryPodcast, alt: "Podcast" },
      ],
    ],
  },
  contact: {
    heading: {
      eyebrow: t("Contact", "ទំនាក់ទំនង"),
      title: t(
        "Let's build something thoughtful together",
        "តោះបង្កើតអ្វីមួយដែលមានគំនិតជាមួយគ្នា",
      ),
      subtitle: t(
        "Reach out for internships, freelance work, collaborations, or product ideas.",
        "ទាក់ទងមកសម្រាប់ការងារកម្មសិក្សា ការងារឯករាជ្យ ការសហការ ឬគំនិតផលិតផល។",
      ),
    },
    invite: {
      title: t("Open to opportunities", "បើកទូលាយចំពោះឱកាស"),
      description: t(
        "I enjoy collaborating on products that need strong front-end execution, thoughtful UX, and reliable delivery.",
        "ខ្ញុំចូលចិត្តសហការលើផលិតផលដែលត្រូវការការអនុវត្ត front-end រឹងមាំ UX ដែលមានការគិត និងការដឹកជញ្ជូនដែលទុកចិត្តបាន។",
      ),
    },
    labels: {
      email: t("Email", "អ៊ីមែល"),
      phone: t("Phone", "ទូរស័ព្ទ"),
      location: t("Location", "ទីតាំង"),
    },
    form: {
      nameLabel: t("Your name", "ឈ្មោះរបស់អ្នក"),
      emailLabel: t("Your email", "អ៊ីមែលរបស់អ្នក"),
      messageLabel: t("Your message", "សាររបស់អ្នក"),
      button: t("Send via email app", "ផ្ញើតាមកម្មវិធីអ៊ីមែល"),
      successMessage: t(
        "Your email app should open with the message drafted.",
        "កម្មវិធីអ៊ីមែលរបស់អ្នកគួរតែបើកជាមួយសារដែលបានរៀបចំរួច។",
      ),
    },
    email: "chheunseangmeng@gmail.com",
    phone: "+855 68 500 744",
    phoneLink: "+85568500744",
    location: "Phnom Penh, Cambodia",
    socials: [
      { label: "GitHub", url: "https://github.com/chheunseangmeng" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/seangmeng-chheun-60923133b",
      },
      { label: "Telegram", url: "https://t.me/seangmengchheun" },
    ],
  },
};
