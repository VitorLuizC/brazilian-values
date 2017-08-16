<template>
  <section>
    <h2>Formaters & Format Filters</h2>

    <p>Data: {{ '25-12-2017' | toDate }}.</p>
    <p>Data: {{ $format.toDate('25-12-2017') }}.</p>

    <p>CPF: {{ '00000000000' | toCPF }}.</p>
    <p>CPF: {{ $format.toCPF('00000000000') }}.</p>

    <p>RG: {{ '000000000' | toRG }}.</p>
    <p>RG: {{ $format.toRG('000000000') }}.</p>

    <p>Idade: {{ '1996-03-28' | toAge }} anos.</p>
    <p>Idade: {{ $format.toAge('1996-03-28') }} anos.</p>

    <hr />

    <h2>Validations</h2>

    <h3>isCPF</h3>

    <p>
      000.000.000-00 is valid ? {{ $validation.isCPF('000.000.000-00') }}
      <small>Should be false.</small>
    </p>

    <p>
      874.864.536-22 is valid ? {{ $validation.isCPF('874.864.536-22') }}
      <small>Should be true.</small>
    </p>

    <p>
      128.278.198-20 is valid ? {{ $validation.isCPF('128.278.198-20') }}
      <small>Should be false.</small>
    </p>

    <h3>isDate</h3>

    <p>
      28/03/1996 is valid ? {{ $validation.isDate('28/03/1996') }}
      <small>Should be true.</small>
    </p>

    <p>
      874.864.536-22 is valid ? {{ $validation.isCPF('874.864.536-22') }}
      <small>Should be true.</small>
    </p>

    <p>
      128.278.198-20 is valid ? {{ $validation.isCPF('128.278.198-20') }}
      <small>Should be false.</small>
    </p>
  </section>
</template>

<script>
  export default {
    created () {
      console.log(this.$format)
      console.log(this.$validation)
    }
  }
</script>
