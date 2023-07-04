export const HoverEffectToggle = (id) => {
  const parentDiv = document.getElementById(id)

  if (parentDiv.classList.contains('rounded-r-lg','bg-gradient-to-l', 'from-gray-300', 'to-bg-transparent')) {
    parentDiv.classList.remove('rounded-r-lg','bg-gradient-to-l', 'from-gray-300', 'to-bg-transparent')
  } else {
    parentDiv.classList.add('rounded-r-lg','bg-gradient-to-l', 'from-gray-300', 'to-bg-transparent')
  }
}

export const SectionsList = [
  {
    section_type: 10001,
    section_name: 'ContactSection',
  },
  {
    section_type: 10002,
    section_name: 'ObjectiveSection',
  },
  {
    section_type: 10003,
    section_name: 'ListSection',
  },
  {
    section_type: 10004,
    section_name: 'ProjectsSection',
  },
]
