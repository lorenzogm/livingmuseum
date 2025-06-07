// Team members API
import lauraData from '../../public/content/team/laura-carmona-ayuso/laura-carmona-ayuso.es.json';
import juliaData from '../../public/content/team/julia-morla/julia-morla.es.json';
import javierData from '../../public/content/team/javier-lapuerta-laorden/javier-lapuerta-laorden.es.json';
import piedadData from '../../public/content/team/piedad-garcia-murga/piedad-garcia-murga.es.json';
import martaData from '../../public/content/team/marta-lage/marta-lage.es.json';
import mariamData from '../../public/content/team/mariam-caliz-caceres/mariam-caliz-caceres.es.json';

// Team member interfaces
export interface TeamMemberProfile {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string[];
  social: {
    linkedin?: string;
    instagram?: string;
  };
}

export interface TeamPageContent {
  teamMembers: TeamMemberProfile[];
}

// Combine all team member data (alphabetically sorted by name)
const allTeamMembers: TeamMemberProfile[] = [
  javierData,
  juliaData,
  lauraData,
  mariamData,
  martaData,
  piedadData
] as TeamMemberProfile[];

// Process team members to handle any missing data
const processedTeamMembers: TeamMemberProfile[] = allTeamMembers.map(member => ({
  ...member,
  image: member.image || '/placeholder-profile.svg'
}));

// Team content loader
export const getTeamContent = (): TeamPageContent => {
  return {
    teamMembers: processedTeamMembers
  };
};

// Get filtered team members (excluding specified members)
export const getFilteredTeamMembers = (excludeNames: string[] = []): TeamMemberProfile[] => {
  return processedTeamMembers.filter(member => !excludeNames.includes(member.name));
};

export const getTeamMemberBySlug = (slug: string): TeamMemberProfile | undefined => {
  return processedTeamMembers.find(member => member.slug === slug);
};
