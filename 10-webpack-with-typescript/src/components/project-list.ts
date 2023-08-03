import Component from '../components/base-component';
import { Project, ProjectStatus } from '../models/project';
import { autoBind } from '../decorators/autobind';
import { projectState } from '../state/project-state';
import { DragTarget } from '../models/drag-drop';
import { ProjectItem } from './project-item';

export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
  assignedProjects: Project[] = [];

  constructor(private type: 'active' | 'finished') {
    super('project-list', 'app', false, `${type}-projects`);
    this.configure();
    this.renderContent();
  }

  @autoBind
  dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();
      const listElem = this.element.querySelector('ul')!;
      listElem.classList.add('droppable');
    }
  }

  @autoBind
  dragLeaveHandler(_event: DragEvent): void {
    const listElem = this.element.querySelector('ul')!;
    listElem.classList.remove('droppable');
  }

  @autoBind
  dropHandler(event: DragEvent): void {
    const projectId = event.dataTransfer!.getData('text/plain');
    projectState.moveProject(
      projectId,
      this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }

  configure(): void {
    this.element.addEventListener('dragover', this.dragOverHandler);
    this.element.addEventListener('dragleave', this.dragLeaveHandler);
    this.element.addEventListener('drop', this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((f) => {
        if (this.type === 'active') {
          return f.status === ProjectStatus.Active;
        }
        return f.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
  }

  private renderProjects() {
    const listElem = document.getElementById(`${this.type}-projects-list`) as HTMLUListElement;
    listElem.innerHTML = '';
    for (const item of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, item);
    }
  }
}
