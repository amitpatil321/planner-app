import emojis from 'emojis-list';

export const genericCategories = [
  {
    label: "All",
    id: "all",
    colorId: "#52a911",
    emojiId: null
  },
  {
    label: "Archived",
    id: "archived",
    colorId: "#0F2CE2",
    emojiId: null
  },
  {
    label: "Important",
    id: "important",
    colorId: "#0F2CE2",
    emojiId: null
  },
  {
    label: "Completed",
    id: "completed",
    colorId: "#0F2CE2",
    emojiId: null
  },
  {
    label: "Inprogress",
    id: "inprogress",
    colorId: "#0F2CE2",
    emojiId: null
  }
]

export const colorList = [
  { id:'#0162AE', color:'#0162AE' },
  { id:'#02C1FC', color:'#02C1FC' },
  { id:'#05B8AE', color:'#05B8AE' },
  { id:'#01B96D', color:'#01B96D' },
  { id:'#DCBB0F', color:'#DCBB0F' },
  { id:'#FFF1AF', color:'#FFF1AF' },
  { id:'#FF6956', color:'#FF6956' },
  { id:'#EC0039', color:'#EC0039' },
  { id:'#AD0F0C', color:'#AD0F0C' },
  { id:'#BE108C', color:'#BE108C' },
  { id:'#FA6DE4', color:'#FA6DE4' },
  { id:'#7F42FF', color:'#7F42FF' },
  { id:'#4643FE', color:'#4643FE' },
  { id:'#4643FE', color:'#4643FE' },
  { id:'#7C6F63', color:'#7C6F63' },
  { id:'#AD0F0C', color:'#AD0F0C' },
  { id:'#BE108C', color:'#BE108C' },
  { id:'#FA6DE4', color:'#FA6DE4' },
  { id:'#7F42FF', color:'#7F42FF' },
  { id:'#4643FE', color:'#4643FE' },
  { id:'#4643FE', color:'#4643FE' },
  { id:'#7C6F63', color:'#7C6F63' },
  {id: '#0F2CE2', color: '#0F2CE2'},
  {id: '#52a911', color: '#52a911'}
];

export const emojiList = emojis.map((data, index) => ({
  id: index,
  emoji: data
}));

export const tabOptions = [
  {
    key: 'color',
    label: 'Color',
  },
  {
    key: 'emoji',
    label: 'Emojis',
  }
]