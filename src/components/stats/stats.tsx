import { Users, Heart, AlertCircle, Activity } from 'lucide-react';

function Stats() {
  const stats = [
    {
      value: '12',
      title: 'Total Connections',
      desc: 'People you’ve added in your circle',
      icon: Users,
    },
    {
      value: '8',
      title: 'Strong Bonds',
      desc: 'Friends you interact with regularly',
      icon: Heart,
    },
    {
      value: '4',
      title: 'Needs Attention',
      desc: 'Connections you haven’t talked to recently',
      icon: AlertCircle,
    },
    {
      value: '24',
      title: 'Interactions This Month',
      desc: 'Messages, calls, or meetups tracked',
      icon: Activity,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div key={stat.title} className="rounded-lg border bg-muted p-4">
              <Icon className="mb-2 h-7 w-7 stroke-[1.5px] text-primary" />

              <span className="font-satoshi font-semibold text-3xl">{stat.value}</span>

              <p className="mt-1 text-base font-medium">{stat.title}</p>

              <p className="mt-1 text-xs text-muted-foreground">{stat.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stats;
