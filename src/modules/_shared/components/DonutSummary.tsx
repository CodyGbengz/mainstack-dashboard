import { ConditionRenderComponent } from './ConditionRender';
import { chartConfig } from './Charts/chartConstants';
import { InstagramIcon } from './Icons/InstagramIcon';
import { FacebookIcon } from './Icons/FacebookIcon';
import { LinkedInIcon } from './Icons/LinkedInIcon';
import { TwitterIcon } from './Icons/TwitterIcon';
import Typography from './Typography';
import { Dot } from './Dot';

type DonutSummaryData = {
  country?: string;
  percent: number;
  source?: string;
  count: number;
};

interface DonutSummaryProps {
  chartData: DonutSummaryData[];
}

export const DonutSummary: React.FC<DonutSummaryProps> = ({ chartData }) => (
  <>
    {chartData?.map((chartDataObj: DonutSummaryData, index: number) => {
      const { country, source, percent } = chartDataObj;
      return (
        <div
          style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
          key={country}
        >
          <ConditionRenderComponent renderIf={source === 'facebook'}>
            <FacebookIcon />
          </ConditionRenderComponent>
          <ConditionRenderComponent renderIf={source === 'instagram'}>
            <InstagramIcon />
          </ConditionRenderComponent>
          <ConditionRenderComponent renderIf={source === 'twitter'}>
            <TwitterIcon />
          </ConditionRenderComponent>
          <ConditionRenderComponent renderIf={source === 'linkedin'}>
            <LinkedInIcon />
          </ConditionRenderComponent>
          <ConditionRenderComponent renderIf={country === 'Nigeria'}>
            <span className='fi fi-ng'></span>
          </ConditionRenderComponent>
          <ConditionRenderComponent renderIf={country === 'Germany'}>
            <span className='fi fi-de'></span>
          </ConditionRenderComponent>
          <ConditionRenderComponent renderIf={country === 'Ghana'}>
            <span className='fi fi-gh'></span>
          </ConditionRenderComponent>
          <ConditionRenderComponent renderIf={country === 'Finland'}>
            <span className='fi fi-fi'></span>
          </ConditionRenderComponent>
          <ConditionRenderComponent renderIf={country === 'United Kingdom'}>
            <span className='fi fi-gb'></span>
          </ConditionRenderComponent>
          <Typography
            fontWeight='thin'
            fontSize='0.875rem'
          >
            {country || source} {percent}%
          </Typography>
          <Dot color={chartConfig.backgroundColor[index]} />
        </div>
      );
    })}
  </>
);
