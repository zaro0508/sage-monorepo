import {
  ChallengePlatform,
  ChallengeStatus,
  ChallengeDifficulty,
  ChallengeIncentiveType,
  ChallengeSubmissionType,
  DateRange,
} from '@sagebionetworks/api-client-angular-deprecated';

export interface ChallengeSearchQuery {
  limit?: number;
  offset?: number;
  // sort?: 'createdAt' | 'updatedAt';
  // direction?: 'asc' | 'desc';
  // searchTerms?: string;
  // topics?: string[];
  status?: ChallengeStatus[];
  platforms?: ChallengePlatform[]; // assume to query platform name instead of ids
  startYearRange?: DateRange;
  inputDataTypes?: string[];
  difficulty?: ChallengeDifficulty[];
  submissionTypes?: ChallengeSubmissionType[];
  incentiveTypes?: ChallengeIncentiveType[];
  // orgIds?: string[];
  // organizerIds?: string[];
  // sponsorIds?: string[];
}