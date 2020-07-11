module ApplicationHelper
    def get_log
        t = Time.now
        log_file = 'logs.md'
        new_log = [
            Rails.env,
            t.strftime("%Y/%m/%d"),
            t.strftime("%H:%M:%S"),
            request.user_agent,
            controller.controller_name,
            controller.action_name,
            request.remote_ip
        ].join(', ')

        File.open(log_file, 'a') do |f1|
            f1.puts new_log
        end
    end

    def section_class
        def section_class
            "ctr_#{controller.controller_name} view_#{controller.action_name}"
        end
    end
end