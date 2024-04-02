const MathSidebar = [
    'concepts/math/introduction',
    {
      type: 'category',
      label: 'Linear Algebra',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/math/linearalgebra'
        }
      ]
    },
    {
      type: 'category',
      label: 'Statistics',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/math/statistics'
        }
      ]
    },
    {
      type: 'category',
      label: 'Information Theory',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/math/information'
        }
      ]
    }, 
    {
      type: 'category',
      label: 'Calculus',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/math/calculus'
        }
      ]
    },
]


const MLConceptSidebar = [
    'concepts/mlconcept/introduction',
    {
      type: 'category',
      label: 'Data',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/mlconcept/data'
        }
      ]
    },
    {
      type: 'category',
      label: 'Taxonomy',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/mlconcept/taxonomy'
        }
      ]
    },
    {
      type: 'category',
      label: 'Metrics',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/mlconcept/metrics',
        }
      ]
    },
]


const DeepLearningSidebar = [
    'concepts/deeplearning/introduction',
    {
      type: 'category',
      label: 'Taxonomy',
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts/deeplearning/taxonomy'
        }
      ]
    }
]


const LargeModelConceptSidebar = [
  'concepts/largemodel/introduction',
  'concepts/largemodel/decoding'
]

const ProgrammingSidebar = [
    {
      type: 'autogenerated',
      dirName: 'concepts/programming'
    }
]


const ConceptSidebars  = {
    MathSidebar: MathSidebar,
    MLConceptSidebar: MLConceptSidebar,
    DeepLearningSidebar: DeepLearningSidebar,
    LargeModelConceptSidebar: LargeModelConceptSidebar,
    ProgrammingSidebar: ProgrammingSidebar,
}


export default ConceptSidebars;