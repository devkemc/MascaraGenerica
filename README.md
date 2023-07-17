# Mascara Genérica para campos numéricos

Mascara em JavaScript para campos de formulários numéricos, facilmente configurável.
## Como usar em seu projeto?

- Basta fazer o donwload ou clone deste repositório para o seu projeto.
- Inclua o arquivo **mascara-generica.js** no seu HTML como no exemplo abaixo.

```
<script src="mascara-generica.js"></script>
```

## Como criar as Mascaras?

É muito simples, coloque a mascara que você deseja.
Por exemplo, você quer criar uma máscara para o campo CPF, que tem este formato **123.456.789-00** a mascara para um campo CPF será exatamente como o formato que deseja.
Após digitar todos os números do CPF os caracteres serão incluidos.

## Como incluir a máscara no meu campo de formulário?

Você precisa colocar um atributo no seu input chamado **mask**, e um maxlength como o tamanho da entrada desejada sem a formatação

**Exemplo:**

```
mask="999.999.999-99" maxlength="11"
```

**Exemplo completo input:**

```
<input id="cpf" placeholder="123.456.789-01" mask='999.999.999-99' maxlength="11">
```
### Outros Exemplos

Para ver exemplos reais, abra o arquivo **index.html**.

