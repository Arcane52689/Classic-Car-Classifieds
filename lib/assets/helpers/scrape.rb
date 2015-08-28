require 'json'
def scrape(make, string)
  fileName = make + ".txt"
  file = File.open(fileName, "w")

  parse_json(string).each do |model|
    file.puts(model)
  end

  file.close


end



def parse_json(string)
  JSON.parse(string)["models"].map { |hash| hash["key"]}
end
