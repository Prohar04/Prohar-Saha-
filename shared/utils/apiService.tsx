import { Company, PersonalDetails, Project } from './types';
import { COMPANIES, PERSONAL_DETAILS, PROJECTS } from './data';

export const BASE_URL = `${process.env.BASE_URL}/api` || 'https://proharsaha.vercel.app/api';

export async function getPersonalDetails(): Promise<PersonalDetails | boolean> {
  return PERSONAL_DETAILS;
}

export async function getProjectDetails(): Promise<Project[] | boolean> {
  return PROJECTS;
}

export async function getCompanyDetails(): Promise<Company[] | boolean> {
  return COMPANIES;
}

export async function getGithubDetails(): Promise<unknown> {
  try {
    const res = await fetch('https://api.github.com/repos/Prohar04/another-portfolio');
    if (!res.ok) return false;
    return await res.json();
  } catch {
    return false;
  }
}
