# Projeto Órama 5.0
### Equpe Union Squad – Daniel Rocha, Mateus, Letícia Fiorito e Wally
Desafio: "Desenvolver uma forma de apresentar os serviços e produtos de investimentos de uma forma mais amigável, simplificada e que atenda as melhores práticas de experiência do usuário".

1. Video Pitch: 
2. Video App Mockup: 
3. Apresentação de Slides: https://bit.ly/38LK7IE

### **Descrição**

<p align="justify">
Criamos uma solução digital para tonar mais amigável a experiência do cliente da Órama. Criamos um Chat BOT que auxilia o cliente a responder o questionário de suitability, que também foi adaptado para ficar menos técnico. Além disso, também criamos um algortimo de machine learning que permite inferir o perfil de investimento mesmo nos casos em que o cliente prefere não responder o questionário de suitability.
</p>

### **Solução**

1. O usuário abre uma conta na Órama, preenche as informações obrigatórias e pode:
   - Responder, via Chat BOT, um questionário rápido e amigável para traçar o seu perfil de investimentos;
   - Optar por pular o questionário (nesse caso, o algoritmo infere o perfil do cliente).

2. Com base nas preferências respondidas ou inferidas, é criado automaticamente uma carteira de investimentos personalizada e o cliente pode:
   - Ajustar a distribuição de produtos (percentual de renda variável, renda fixa e fundos multimercado);
   - Excluir ou adicionar outros produtos à carteira (nesse caso, são sugeridos os produtos compatíveis com o perfil).
  
### **Tecnologias**

1. Machine Learning
   - Após testar diversos algoritmos, conseguimos obter **aproximadamente 70% de acurácia preditiva no nosso modelo final**, utilizando o Extreme Gradient Boost (XGBoost). 
   - O algoritmo de Machine Learning construído utiza somente informações demográficas** (idade, sexo, renda, etc.), para estimar o perfil de investimento dos usuários.

2. Chat BOT Assistente Virtual (Otto)
   - A estruturação do questionário como se fosse um chat de conversa faz com que o **processo de responder o teste seja menos monótono e cansativo**.
   - A linguagem sem economês e mais próxima da realidade das pessoas ajuda a fazer um mapeamento mais adequado do perfil dos usuários.

### **Execução**

- A tecnologia que desenvolvemos pode facilmente ser integrada ao aplicativo e ao site da Órama, permitindo uma implementação rápida do projeto. Todos os dados utilizados foram fornecidos pela própria Órama, o que nos leva a crer que o algoritmo funcionará bem quando for aplicado a toda a base de clientes da Órama.
- Além disso, como os dados utiilizados para realizar a inferência de perfil já são respondidos obrigatoriamente por todos os usuárioa ao abrirem uma conta na Órama, acreditamos que esse é mais um fator que facilita possibilidade de uma implementação rápida da nossa solução.

### **Características Adicionais**

- Abordagem user-friendly (eliminando fricções que afastam as pessoas responder o questionário de suitability).
- Facilitação para que pessoas com pouco conhecimento sobre investimento consigam começar a investir, de forma completamente self-service e digital.
- Personalização de investimentos mesmo em contexto de informação assimétrica (quando o cliente não responde o suitability).
- Possibilidade de criar **propagandas com melhores recomendações**, desde que haja alguma informação sobre o perfil demográfico do público-alvo da plataforma na qual seja realizada a publicidade da Órama. 


<img src="https://github.com/danielnrocha/MegaHackOrama/blob/master/logo.png" width="800">

----------
