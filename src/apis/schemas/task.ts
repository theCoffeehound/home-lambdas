export interface Task {
    id: string,
    title: string,
    description: string,
    project_id: number,
    remaining: number,
    estimate: number,
    start_date: string,
    end_date: string,
    assignedPersons: number[],
}