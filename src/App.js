import React from 'react'
import { Ava, SubTittle, Container, Tittle, Conteudos, Calendario, Bibliotecas, Comunidades, Secretaria, Mural, Tutoriais, ImagePerfil, Text, ContainerAviso, TextAvisos} from './style'
import './style.css'
import {MenuBook, DateRangeOutlined, LibraryBooksOutlined, GroupOutlined, HeadsetMicOutlined, AssignmentIndOutlined, ExtensionOutlined} from '@material-ui/icons'
import perfil from './imgs/perfil.jpg'

function Avisos () {
  return (
    <ContainerAviso>
      <TextAvisos>
        Olá, Thiago. <br />
          Visando dar continuidade às nossas atividades em EaD, bem como afetar minimamente sua rotina de estudo, uma vez que, em virtude da pandemia, nossos calendários passaram por algumas adequações, temos orientações importantes para auxiliá-lo(a):
            <p><li>Os conteúdos de cada disciplina devem ser realizados seguindo a ordem proposta no calendário.</li>
            <li>A Avaliação Presencial (AP) referente aos 1º e 2º bimestres será validada por meio de questionários de cada uma das disciplinas realizadas no AVA até o dia 28/11. Você terá, no total, 6 tentativas para cada questionário, ficando a seu critério a necessidade de refazer ou não.</li>
            <li>Caso você necessite do EXAME, terá novo período para realização dos questionários, com mais 3 tentativas no período entre os dias 14 a 19/12. Após esse período não será possível realizar mais nenhum questionário.</li>
            <li>Os trabalhos acadêmicos, assim como as atividades do AVA, como ED – Estudos Disciplinares, Atividade Complementar, PIM – Projeto Integrado Multidisciplinar, entre outros, não sofrerão alterações na forma de entrega e prazos. As informações específicas de cada uma das suas atividades estarão postadas na comunidade do curso, na disciplina e também no seu calendário.</li>
            <li>Para as aulas práticas de laboratório e realização dos estágios (quando aplicados em seu curso), deverá seguir o calendário e as informações disponibilizadas no AVA na comunidade do curso e/ou disciplina.</li>
            <li>Consulte diariamente o AVA para verificar as atualizações do calendário e as informações necessárias para desenvolver suas atividades com sucesso. </li></p>
            <br/>
          OBS.: <i><mark>Para as disciplinas Introdução a Educação à Distância, Optativas, Estudos Disciplinares e Técnicas de Informática(para os cursos da saúde exceto gestão hospitalar), a nota da prova (AP) e Exame (se necessário) corresponderá à nota alcançada pela realização da “Avaliação” e “Exame” cujas pastas ficam disponíveis nas referidas disciplinas no AVA, porém, a realização dos questionários são obrigatórios, pois computarão sua presença e farão parte da composição da média final das respectivas disciplinas.</mark></i><br/><br/>
          Nossos canais de atendimento (fórum da disciplina e central de atendimento) estão ativos. Seus docentes e tutores estão disponíveis para auxiliá-lo(a) e orientá-lo(a).<br/>
          <br/>
          Sabemos que este momento é delicado para todos, contudo, estamos trabalhando intensamente para que você receba todos os conteúdos e para que as adequações necessárias tenham o menor impacto possível em sua vida acadêmica. 
          <br/> 
          Bom Estudo!
      </TextAvisos>
    </ContainerAviso>
  )
}


function App() {
  return (
     <body>
       <Container>
         <Ava>AVA</Ava>
          <Tittle>UNIP</Tittle>
          <SubTittle>UNIVERSIDADE PAULISTA</SubTittle>
          <div style={{position: "absolute", top: 10, left: 10, display: "flex", flexDirection: "row"}}>
              <ImagePerfil src={perfil} />
              <Text style={{color: "white"}}>thiago.ferrari1@aluno.unip.br</Text>
          </div>
          <div style={{display: "flex", flexDirection: "row", marginRight: 25, marginLeft: 0}}>
              <Conteudos><Text>CONTEÚDOS ACADÊMICOS</Text> <MenuBook fontSize={"large"}/> </Conteudos>
              <Calendario><Text>CALENDÁRIO</Text> <DateRangeOutlined fontSize={"large"}/> </Calendario>
              <Bibliotecas><Text>BIBLIOTECAS</Text> <LibraryBooksOutlined  fontSize={"large"}/> </Bibliotecas>
              <Comunidades><Text>COMUNIDADES</Text> <GroupOutlined fontSize={"large"}/> </Comunidades>
              <Secretaria><Text>SECRETÁRIA</Text> <HeadsetMicOutlined fontSize={"large"}/> </Secretaria>
              <Mural><Text>MURAL DO ALUNO</Text> <AssignmentIndOutlined fontSize={"large"}/> </Mural>
              <Tutoriais><Text>TUTORIAIS</Text> <ExtensionOutlined fontSize={"large"}/> </Tutoriais>
          </div>
          <Avisos />
       </Container>
     </body>
   
  )
}

export default App
