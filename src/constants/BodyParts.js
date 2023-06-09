import {
  BlueCircle,
  NeckLine,
  ShoulderLine,
  CircleWhite,
  Line,
  CircleRed,
  CircleRed1,
  Line1,
  Line2,
} from '../assets/svgicons';

export const FrontBodyParts = [
  {
    isOpened: false,
    selected: {
      key: 'Neck',
      label: 'Neck',
      line: NeckLine,
      cicle: BlueCircle,
      cicle1: CircleWhite,
      top: 0,
      right: 136,
      marginRight: -55,
    },
    notSelected: {
      key: 'Neck',
      cicle: BlueCircle,
      cicle1: CircleWhite,
      top: 57,
      right: 187,
    },
  },
  {
    isOpened: false,

    selected: {
      key: 'shoulder',
      label: 'Shoulder',
      line: ShoulderLine,
      cicle: BlueCircle,
      cicle1: CircleWhite,
      top: 60,
      right: 80,
      marginRight: -50,
    },
    notSelected: {
      key: 'shoulder',
      cicle: BlueCircle,
      cicle1: CircleWhite,
      top: 118,
      right: 130,
    },
  },
  {
    isOpened: false,

    selected: {
      key: 'wrist&Hand',
      label: 'Wrist & Handow',
      line: ShoulderLine,
      cicle: BlueCircle,
      cicle1: CircleWhite,
      top: 135,
      right: 80,
      marginRight: -50,
    },
    notSelected: {
      key: 'wrist&Hand',
      cicle: BlueCircle,
      cicle1: CircleWhite,
      top: 192,
      right: 130,
    },
  },
  {
    isOpened: false,

    selected: {
      key: 'elbow',
      label: 'Elbow',
      line: ShoulderLine,
      cicle: BlueCircle,
      cicle1: CircleWhite,
      top: 190,
      right: 70,
      marginRight: -40,
    },
    notSelected: {
      key: 'elbow',
      cicle: BlueCircle,
      cicle1: CircleWhite,
      top: 250,
      right: 120,
    },
  },
  {
    isOpened: false,
    isOnLeftSide: true,
    selected: {
      key: 'groin',
      label: 'Groin',
      line: Line,
      cicle: BlueCircle,
      cicle1: CircleWhite,
      top: 192,
      right: 210,
      marginRight: 50,
    },
    notSelected: {
      key: 'groin',
      cicle: BlueCircle,
      cicle1: CircleWhite,
      top: 250,
      right: 210,
    },
  },
  {
    isOpened: false,
    isOnLeftSide: true,
    selected: {
      key: 'knee',
      label: 'Knee',
      line: Line,
      cicle: BlueCircle,
      cicle1: CircleWhite,
      top: 296,
      right: 205,
      marginRight: 50,
    },
    notSelected: {
      key: 'knee',
      cicle: BlueCircle,
      cicle1: CircleWhite,
      top: 355,
      right: 205,
    },
  },
  {
    isOpened: false,
    isOnLeftSide: true,
    selected: {
      key: 'foot',
      label: 'Foot & Ankle',
      line: Line,
      cicle: BlueCircle,
      cicle1: CircleWhite,
      top: 400,
      right: 200,
      marginRight: 50,
    },
    notSelected: {
      key: 'foot',
      cicle: BlueCircle,
      cicle1: CircleWhite,
      top: 460,
      right: 200,
    },
  },
];

export const BackBodyParts = [
  {
    isOpened: false,
    isOnLeftSide: true,
    selected: {
      key: 'cervical',
      label: 'Cervical',
      discription: '(Neck pain)',
      line: Line2,
      cicle1: CircleRed,
      top: 8,
      right: 185,
      marginRight: 30,
    },
    notSelected: {
      key: 'cervical',
      cicle: CircleRed1,
      top: 80,
      right: 185,
    },
  },
  {
    isOpened: false,
    isOnLeftSide: true,
    selected: {
      key: 'thoracic',
      label: 'Thoracic',
      discription: '(back pain)',
      line: Line2,
      cicle1: CircleRed,
      top: 68,
      right: 185,
      marginRight: 50,
    },
    notSelected: {
      key: 'thoracic',
      cicle: CircleRed1,
      top: 140,
      right: 185,
    },
  },
  {
    isOpened: false,
    isOnLeftSide: true,
    selected: {
      key: 'lumbar',
      label: 'Lumbar',
      discription: '(back pain)',
      line: Line2,
      cicle1: CircleRed,
      top: 138,
      right: 185,
      marginRight: 50,
    },
    notSelected: {
      key: 'lumbar',
      cicle: CircleRed1,
      top: 210,
      right: 185,
    },
  },
  {
    isOpened: false,
    isOnLeftSide: true,
    selected: {
      key: 'hip',
      label: 'Hip',
      line: Line2,
      cicle1: CircleRed,
      top: 203,
      right: 210,
      marginRight: 50,
    },
    notSelected: {
      key: 'hip',
      cicle: CircleRed1,
      top: 260,
      right: 210,
    },
  },
];
