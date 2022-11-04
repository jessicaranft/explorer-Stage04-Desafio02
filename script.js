const students = [
  {
    name: "Maria",
    firstNote: 8,
    secondNote: 6,
  },
  {
    name: "João",
    firstNote: 5,
    secondNote: 3,
  },
  {
    name: "Pedro",
    firstNote: 10,
    secondNote: 9,
  },
  {
    name: "Ana",
    firstNote: 4,
    secondNote: 2,
  },
]

function average(note1, note2) {
  return ((note1 + note2) / 2).toFixed(1)
}

for(student of students) {
  if (average() >= 7) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average(student.firstNote, student.secondNote)}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average(student.firstNote, student.secondNote)}
    Não foi desta vez, ${student.name}! Tente novamente!`)
  }
}

