# Projeto Órama 5.0
### Equpe Union Squad – Daniel Rocha, Mateus, Letícia Fiorito e Wally
Desafio: "Desenvolver uma forma de apresentar os serviços e produtos de investimentos de uma forma mais amigável, simplificada e que atenda as melhores práticas de experiência do usuário".

1. Video Pitch: 
2. Video App Mockup: 
3. Apresentação de Slides: https://bit.ly/38LK7IE

#### **Descrição**

<p align="justify">
Criamos uma solução digital para tonar mais amigável a experiência do cliente da Órama. Criamos um chat BOT que auxilia o cliente a responder o questionário de suitability, que também foi adaptado para ficar menos técnico. Além disso, também criamos um algortimo de machine learning que permite inferir o perfil de investimento mesmo nos casos em que o cliente prefere não responder o questionário de suitability.
</p>

#### **Solução**

<p align="justify">
1. O usuário abre uma conta na Órama, preenche as informações obrigatórias e pode:
  a. Responder um questionário rápido e amigável para traçar o seu perfil de investimentos
  b. Optar por pular o questionário (nesse caso, o algoritmo infere o perfil do cliente)
2. Com base nas preferências respondidas ou inferidas, é criado automaticamente uma carteira de investimentos personalizada e:
  a. o cliente pode ajustar a distribuição de produtos (percentual de renda variável, renda fixa e fundos multimercado)
  b. o cliente pode excluir ou adicionar outros produtos à carteira (nesse caso, são sugeridos os produtos compatíveis com o perfil)
  
</p>

#### **Tecnologias**

1. Machine Learning
<p align="justify">
- Após testar diversos algoritmos, conseguimos obter **aproximadamente 70% de acurácia preditiva no nosso modelo final**, utilizando o Extreme Gradient Boost (XGBoost). 

<p align="justify">
- O algoritmo de Machine Learning construído utiza somente informações demográficas** (idade, sexo, renda, etc.), para estimar o perfil de investimento dos usuários.
</p>

2. Chat BOT Assistente Virtual (Otto)
<p align="justify">
- A estruturação do questionário como se fosse um chat de conversa faz com que o **processo de responder o teste seja menos monótono e cansativo**.
- A linguagem sem economês e mais próxima da realidade das pessoas ajuda a fazer um mapeamento mais adequado do perfil dos usuários.
</p>

#### **Execução**

<p align="justify">
- A tecnologia que desenvolvemos pode facilmente ser integrada ao aplicativo e ao site da Órama, permitindo uma implementação rápida do projeto. Todos os dados utilizados foram fornecidos pela própria Órama, o que nos leva a crer que o algoritmo funcionará bem quando for aplicado a toda a base de clientes da Órama.
- Além disso, como os dados utiilizados para realizar a inferência de perfil já são respondidos obrigatoriamente por todos os usuárioa ao abrirem uma conta na Órama, acreditamos que esse é mais um fator que facilita possibilidade de uma implementação rápida da nossa solução.
</p>

#### **Informações adicionais**

<p align="justify">
- Nossa solução permite que a Órama ofereça uma melhor personalização para os investimentos de seus clientes, mesmo em contexto de informação assimétrica.
- Nossa solução é user-friendly (eliminando fricções que afastam as pessoas responder o questionário de suitability).
- Nossa solução, além de poder ser usada dentro do aplicativo e do site da Órama, também permite criar **propagandas com melhores recomendações**, desde que haja alguma informação sobre o perfil demográfico do público-alvo que frequenta a plataforma na qual seja realizada a publicidade da Órama. 
</p>

<img src="https://github.com/danielnrocha/MegaHackOrama/blob/master/logo.png" width="800">

----------
