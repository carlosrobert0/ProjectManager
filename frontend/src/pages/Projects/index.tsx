import { Link, Minus, Pencil, Plus, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { Navigate, NavLink, useFetcher, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { ProjectsContainer, ProjectsList } from "./styles";
import { Project } from "./@types";

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const navigate = useNavigate()

  const token = localStorage.getItem('@Auth:token')

  async function getProjects() {
    const response = await api.get("/projects", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setProjects(response.data)
  }

  async function modalDeleteProject(id: string) {
    let deleteProject = confirm("Deseja excluir o cliente?")
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <ProjectsContainer>
      <div>
        <h1>Projetos</h1>
        <div>
          <NavLink to="/projects/create" title="NOVO PROJETO" end>
            <Plus size={24} />
          </NavLink>
        </div>
      </div>

      <ProjectsList>
        <table>
          <thead>
            <tr>
              <th>title</th>
              <th>cost</th>
              <th>zip_code</th>
              <th>deadline</th>
              <th>done</th>
              <th>username</th>
              {projects?.length ? (
                <>
                  <th></th>
                  <th></th>
                </>
              ) : <></>}
            </tr>
          </thead>
          {
            projects?.length ? (
              <tbody>
                {
                  projects?.map(project => {
                    return (
                      <tr key={project.id}>
                        <td>{project.title}</td>
                        <td>{project.cost}</td>
                        <td>{project.zip_code}</td>
                        <td>{project.cost}</td>
                        <td>{project.done ? 'true' : 'false'}</td>
                        <td>{project.username}</td>
                        <td>
                          <NavLink to={`/projects/update/${project.id}`}>
                            <Pencil size={16} />
                          </NavLink>
                        </td>
                        <td>
                          <button onClick={() => modalDeleteProject(project.id)}>
                            <Trash size={16} />
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            ) : (
              <tr>
                <td></td>
                <td></td>
                <td><span><p>Sem registros de projetos.</p></span></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )
          }
        </table>
      </ProjectsList >
    </ProjectsContainer>
  )
}
