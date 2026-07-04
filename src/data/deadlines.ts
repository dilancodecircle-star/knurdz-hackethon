export type DeadlineCard = {
  id: string;
  label: string;
  due: string;
  action: string;
};

export const deadlineCards: DeadlineCard[] = [
  {
    id: 'orientation',
    label: 'Repository readiness checkpoint',
    due: 'Friday 18:00',
    action: 'Confirm your assigned repository, remotes, and challenge branches are available.',
  },
  {
    id: 'review',
    label: 'Review rotation',
    due: 'Saturday 12:00',
    action: 'Assign a teammate to review the next feature pull request.',
  },
  {
    id: 'release',
    label: 'Release rehearsal',
    due: 'Sunday 16:00',
    action: 'Check the workflow status before completing your submission.',
  },
];
