export interface CompositionAlgebra {
  field: Field
  set: Set
  multiply: BinaryFunction
  conjugation: UnaryFunction
  norm: UnaryFunction
}
