import { writeFileSync } from "fs";
import { resolve } from "path";
import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from "docx";
import {
  achievements,
  education,
  experience,
  languages,
  personalInfo,
  projects,
  skillGroups,
} from "../src/data/resume";

const HEADING_COLOR = "1F2933";
const ACCENT_COLOR = "6D28D9";

function sectionHeading(text: string) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 320, after: 120 },
    border: {
      bottom: { color: ACCENT_COLOR, space: 4, style: "single", size: 6 },
    },
    children: [new TextRun({ text, bold: true, color: HEADING_COLOR })],
  });
}

function bullet(text: string) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text, size: 21 })],
  });
}

const children: Paragraph[] = [
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 60 },
    children: [
      new TextRun({ text: personalInfo.name, bold: true, size: 44 }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
    children: [
      new TextRun({ text: personalInfo.title, size: 26, color: ACCENT_COLOR }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [
      new TextRun({
        text: `${personalInfo.phone}  |  ${personalInfo.email}  |  ${personalInfo.location}`,
        size: 20,
        color: "52606D",
      }),
    ],
  }),

  sectionHeading("Professional Summary"),
  new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text: personalInfo.summary, size: 21 })],
  }),

  sectionHeading("Technical Skills"),
  ...skillGroups.flatMap((group) => [
    new Paragraph({
      spacing: { after: 60 },
      children: [
        new TextRun({ text: `${group.label}: `, bold: true, size: 21 }),
        new TextRun({ text: group.skills.join(", "), size: 21 }),
      ],
    }),
  ]),

  sectionHeading("Professional Experience"),
  ...experience.flatMap((job) => [
    new Paragraph({
      spacing: { before: 160, after: 20 },
      children: [
        new TextRun({ text: job.role, bold: true, size: 23 }),
        new TextRun({
          text: `    ${job.period}`,
          italics: true,
          size: 20,
          color: "52606D",
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: `${job.company} · ${job.location}`,
          size: 20,
          color: "52606D",
        }),
      ],
    }),
    ...job.bullets.map(bullet),
  ]),

  sectionHeading("Projects"),
  ...projects.flatMap((project) => [
    new Paragraph({
      spacing: { before: 160, after: 20 },
      children: [
        new TextRun({ text: project.name, bold: true, size: 23 }),
      ],
    }),
    new Paragraph({
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: `${project.role} · ${project.tech.join(", ")}`,
          italics: true,
          size: 19,
          color: "52606D",
        }),
      ],
    }),
    ...project.bullets.map(bullet),
  ]),

  sectionHeading("Education"),
  ...education.flatMap((item) => [
    new Paragraph({
      spacing: { after: 20 },
      children: [
        new TextRun({ text: item.degree, bold: true, size: 21 }),
        new TextRun({
          text: `    ${item.period}`,
          italics: true,
          size: 20,
          color: "52606D",
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 100 },
      children: [new TextRun({ text: item.institution, size: 20 })],
    }),
  ]),

  sectionHeading("Achievements"),
  ...achievements.map(bullet),

  sectionHeading("Languages"),
  new Paragraph({
    spacing: { after: 60 },
    children: [
      new TextRun({
        text: languages.map((l) => `${l.name} (${l.level})`).join("  |  "),
        size: 21,
      }),
    ],
  }),
];

const doc = new Document({
  sections: [
    {
      properties: {},
      children,
    },
  ],
});

async function main() {
  const buffer = await Packer.toBuffer(doc);
  const outPath = resolve(__dirname, "../public/Ritik_Kumar_Singh_Resume.docx");
  writeFileSync(outPath, buffer);
  console.log(`Wrote ${outPath}`);
}

main();
