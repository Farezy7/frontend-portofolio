import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {
  profileApi, skillsApi, projectsApi, experiencesApi,
  educationsApi, trainingsApi, achievementsApi, certificationsApi,
  contactMessagesApi
} from "../services/api"

export const queries = {
  profile: { queryKey: ["profile"], queryFn: () => profileApi.get() },
  skills: { queryKey: ["skills"], queryFn: () => skillsApi.getAll() },
  projects: { queryKey: ["projects"], queryFn: () => projectsApi.getAll() },
  experiences: { queryKey: ["experiences"], queryFn: () => experiencesApi.getAll() },
  educations: { queryKey: ["educations"], queryFn: () => educationsApi.getAll() },
  trainings: { queryKey: ["trainings"], queryFn: () => trainingsApi.getAll() },
  achievements: { queryKey: ["achievements"], queryFn: () => achievementsApi.getAll() },
  certifications: { queryKey: ["certifications"], queryFn: () => certificationsApi.getAll() },
  contactMessages: { queryKey: ["contactMessages"], queryFn: () => contactMessagesApi.getAll() }
}

export const useProfile = () => useQuery(queries.profile)
export const useSkills = () => useQuery(queries.skills)
export const useProjects = () => useQuery(queries.projects)
export const useExperiences = () => useQuery(queries.experiences)
export const useEducations = () => useQuery(queries.educations)
export const useTrainings = () => useQuery(queries.trainings)
export const useAchievements = () => useQuery(queries.achievements)
export const useCertifications = () => useQuery(queries.certifications)
export const useContactMessages = () => useQuery(queries.contactMessages)

export const useSendContact = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data) => contactApi.send(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["contactMessages"] }),
  })
}